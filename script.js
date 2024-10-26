function contatoWhatsApp(message) {
    const phoneNumber = '5575981766576'; // Substitua pelo número do Andrade Gás
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}
