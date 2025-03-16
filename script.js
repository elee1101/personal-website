document.addEventListener('DOMContentLoaded', () => {
  const contactButton = document.getElementById('contact-btn');

  contactButton.addEventListener('click', () => {
    const email = "leoz0113@berkeley.edu";
    const subject = encodeURIComponent("Contacting Erin Lee");
    const body = encodeURIComponent("Hi Erin,\n\nI visited your website and would like to get in touch with you!");

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const bottle = document.getElementById('bottle-submit');
  const form = document.getElementById('contact-form');

  bottle.addEventListener('click', () => {
    form.requestSubmit();
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! 🐚 Your note is now floating toward me!');
    form.reset();
  });
});
