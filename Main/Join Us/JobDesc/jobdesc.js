function openEmail() {
    var subject = 'Job Application';
    var mailtoLink = 'mailto:recipient@example.com?subject=' + encodeURIComponent(subject);
    window.location.href = mailtoLink;
}
