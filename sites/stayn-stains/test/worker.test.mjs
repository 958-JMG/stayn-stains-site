import { test } from 'node:test';
import assert from 'node:assert/strict';
import worker from '../src/worker.ts';

const form = { prenom:'Camille', nom:'Exemple', email:'camille@example.test', telephone:'0600000000', consent_sms:false, consent_rgpd:true, lang:'ar', type_logement:'T3', source:'site:stayn-stains.fr | stayn_automne_2026 | ar | meta | ar_facade', utm_campaign:'stayn_automne_2026' };
const env = { N8N_WEBHOOK_URL:'https://webhook.example.test/', ASSETS:{fetch:async()=>new Response('asset')} };
const post = payload => new Request('https://www.stayn-stains.fr/api/lead',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(payload)});

test('enquiry without marketing SMS consent reaches sales with its language and attribution', async () => {
  const original=globalThis.fetch; let forwarded;
  globalThis.fetch=async (url,options)=>{assert.equal(url,env.N8N_WEBHOOK_URL);forwarded=JSON.parse(options.body);return new Response('{"ok":true}');};
  try {
    const response=await worker.fetch(post(form),env,{});
    assert.equal(response.status,200);
    for (const key of ['consent_sms','consent_rgpd','lang','type_logement','source','utm_campaign']) assert.equal(forwarded[key],form[key]);
  } finally {globalThis.fetch=original;}
});
test('missing response consent and invalid email are rejected before contacting upstream',async()=>{
  const original=globalThis.fetch; globalThis.fetch=async()=>{throw new Error('unexpected outbound request');};
  try {
    assert.equal((await worker.fetch(post({...form,consent_rgpd:false}),env,{})).status,400);
    assert.equal((await worker.fetch(post({...form,email:'invalid'}),env,{})).status,400);
  } finally {globalThis.fetch=original;}
});
test('upstream failure is reported as a failure, not a successful lead',async()=>{
  const original=globalThis.fetch; globalThis.fetch=async()=>new Response('unavailable',{status:503});
  try {assert.equal((await worker.fetch(post(form),env,{})).status,503);} finally {globalThis.fetch=original;}
});
test('apex GET preserves route and campaign parameters',async()=>{
  const r=await worker.fetch(new Request('https://stayn-stains.fr/en/?utm_campaign=stayn_automne_2026'),env,{});
  assert.equal(r.status,301);assert.equal(r.headers.get('location'),'https://www.stayn-stains.fr/en/?utm_campaign=stayn_automne_2026');
});
