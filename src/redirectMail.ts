export const handleEmailRedirect = (provider: string) => {
  const email = "insightorbit11@gmail.com";

  let url = "";

  if (provider === "gmail") {
    url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
  } else if (provider === "outlook") {
    url = `https://outlook.live.com/mail/0/deeplink/compose?to=${email}`;
  }

  window.location.href = `mailto:${email}`;
};
