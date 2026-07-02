(function(){
  const defaultContent={company:"Adnan's Transport Limited",location:'Bury, Greater Manchester',phone:'+44 7587 803270',whatsapp:'447587803270',email:'write2adnankh@hotmail.com',heroTitle:'Temperature Controlled Couriers for Food, Catering & Pharma',heroText:'Reliable B2B refrigerated transport from Greater Manchester, supporting food suppliers, restaurants, healthcare distributors and logistics operators across the UK.',aboutText:"Adnan's Transport Limited provides 3.5-ton temperature-controlled delivery support for businesses that need reliable chilled and frozen capacity without delays. We focus on professional communication, careful handling and flexible availability.",stat1:'2',companyNo:'15433324',registeredOffice:'27 Padiham Close, Bury, BL9 9NE, United Kingdom',sic:'49410 Freight transport by road'};
  function applyContent(data){
    const c={...defaultContent,...data};
    Object.keys(c).forEach(key=>document.querySelectorAll(`[data-edit="${key}"]`).forEach(el=>el.textContent=c[key]));
    document.querySelectorAll('[data-phone-link]').forEach(a=>a.href='tel:'+c.phone.replace(/\s/g,''));
    document.querySelectorAll('[data-email-link]').forEach(a=>a.href='mailto:'+c.email);
    document.querySelectorAll('[data-whatsapp-link]').forEach(a=>a.href='https://wa.me/'+(c.whatsapp||c.phone.replace(/\D/g,'')));
  }
  fetch('data.json?cache=' + Date.now()).then(r=>r.ok?r.json():{}).then(applyContent).catch(()=>applyContent({}));
  const form=document.getElementById('quoteForm');
  if(form){form.addEventListener('submit',function(e){
    e.preventDefault();
    const name=document.getElementById('name').value, company=document.getElementById('companyInput').value, email=document.getElementById('emailInput').value, phone=document.getElementById('phoneInput').value, service=document.getElementById('service').value, method=document.getElementById('contactMethod').value, message=document.getElementById('message').value;
    const body=`Name: ${name}%0D%0ACompany: ${company}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AService: ${service}%0D%0APreferred contact: ${method}%0D%0A%0D%0ARequirement:%0D%0A${encodeURIComponent(message)}`;
    window.location.href=`mailto:write2adnankh@hotmail.com?subject=Transport Quote Request from ${encodeURIComponent(name)}&body=${body}`;
  })}
})();
