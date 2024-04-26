import * as nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_MAILER_ACCOUNT,
    pass: process.env.BREVO_MAILER_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

console.log(process.env);

export const inviteExamination = async (
  receiver: string,
  examinationId: number,
) => {
  await transporter.sendMail({
    from: process.env.SENDER_EMAIL,
    to: receiver,
    subject: "Invite to do exam - via Brevo",
    text: invitationTemplate(
      receiver,
      process.env.SENDER_EMAIL,
      "SaigonTechnology",
      `${process.env.CLIENT_WEB_URL}/exam_invitation/${examinationId}`,
    ),
  });
};

export const sendResult = async (
  receiver: string,
  assessmentName: string,
  score: number,
) => {
  let text: string;
  if (score >= 5) {
    text = `Congratulations! Your score in ${assessmentName} is ${score}.`;
  } else {
    text = `Your score in ${assessmentName} is ${score}. Please improve and try later.`;
  }
  await transporter.sendMail({
    text,
    from: process.env.SENDER_EMAIL,
    to: receiver,
    subject: "Your examination result via Brevo",
  });
};

const invitationTemplate = (
  receiver: string,
  sender: string,
  organization: string,
  examURL: string,
): string => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="format-detection" content="telephone=no"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title></title><style type="text/css" emogrify="no">#outlook a { padding:0; } .ExternalClass { width:100%; } .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; } table td { border-collapse: collapse; mso-line-height-rule: exactly; } .editable.image { font-size: 0 !important; line-height: 0 !important; } .nl2go_preheader { display: none !important; mso-hide:all !important; mso-line-height-rule: exactly; visibility: hidden !important; line-height: 0px !important; font-size: 0px !important; } body { width:100% !important; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; margin:0; padding:0; } img { outline:none; text-decoration:none; -ms-interpolation-mode: bicubic; } a img { border:none; } table { border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; } th { font-weight: normal; text-align: left; } *[class="gmail-fix"] { display: none !important; } </style><style type="text/css" emogrify="no"> @media (max-width: 600px) { .gmx-killpill { content: '';} } </style><style type="text/css" emogrify="no">@media (max-width: 600px) { .gmx-killpill { content: '';} .r0-o { border-style: solid !important; margin: 0 auto 0 auto !important; width: 320px !important } .r1-i { background-color: #ffffff !important } .r2-c { box-sizing: border-box !important; text-align: center !important; valign: top !important; width: 100% !important } .r3-o { border-style: solid !important; margin: 0 auto 0 auto !important; width: 100% !important } .r4-i { background-color: #ffffff !important; padding-bottom: 20px !important; padding-left: 15px !important; padding-right: 15px !important; padding-top: 20px !important } .r5-c { box-sizing: border-box !important; display: block !important; valign: top !important; width: 100% !important } .r6-o { border-style: solid !important; width: 100% !important } .r7-i { padding-left: 0px !important; padding-right: 0px !important } .r8-i { padding-bottom: 20px !important; padding-left: 10px !important; padding-right: 10px !important; padding-top: 20px !important } .r9-c { box-sizing: border-box !important; text-align: left !important; valign: top !important; width: 100% !important } .r10-o { border-style: solid !important; margin: 0 auto 0 0 !important; width: 100% !important } .r11-i { padding-top: 15px !important; text-align: center !important } .r12-c { box-sizing: border-box !important; padding-bottom: 15px !important; padding-top: 15px !important; text-align: center !important; valign: top !important; width: 100% !important } .r13-c { box-sizing: border-box !important; padding-bottom: 15px !important; padding-top: 15px !important; text-align: left !important; valign: top !important; width: 100% !important } .r14-c { box-sizing: border-box !important; padding: 0 !important; text-align: center !important; valign: top !important; width: 100% !important } .r15-o { border-style: solid !important; margin: 0 auto 0 auto !important; margin-bottom: 15px !important; margin-top: 15px !important; width: 100% !important } .r16-i { padding: 0 !important; text-align: center !important } .r17-r { background-color: #1B1B1B !important; border-radius: 4px !important; border-width: 0px !important; box-sizing: border-box; height: initial !important; padding: 0 !important; padding-bottom: 12px !important; padding-left: 5px !important; padding-right: 5px !important; padding-top: 12px !important; text-align: center !important; width: 100% !important } .r18-i { background-color: #eff2f7 !important; padding-bottom: 20px !important; padding-left: 15px !important; padding-right: 15px !important; padding-top: 20px !important } .r19-i { color: #3b3f44 !important; padding-bottom: 0px !important; padding-top: 15px !important; text-align: center !important } .r20-i { color: #3b3f44 !important; padding-bottom: 0px !important; padding-top: 0px !important; text-align: center !important } .r21-c { box-sizing: border-box !important; text-align: center !important; width: 100% !important } .r22-i { padding-bottom: 15px !important; padding-left: 0px !important; padding-right: 0px !important; padding-top: 0px !important } .r23-c { box-sizing: border-box !important; text-align: center !important; valign: top !important; width: 129px !important } .r24-o { border-style: solid !important; margin: 0 auto 0 auto !important; width: 129px !important } body { -webkit-text-size-adjust: none } .nl2go-responsive-hide { display: none } .nl2go-body-table { min-width: unset !important } .mobshow { height: auto !important; overflow: visible !important; max-height: unset !important; visibility: visible !important; border: none !important } .resp-table { display: inline-table !important } .magic-resp { display: table-cell !important } } </style><style type="text/css">p, h1, h2, h3, h4, ol, ul, li { margin: 0; } a, a:link { color: #696969; text-decoration: underline } .nl2go-default-textstyle { color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; word-break: break-word } .default-button { color: #ffffff; font-family: arial,helvetica,sans-serif; font-size: 16px; font-style: normal; font-weight: bold; line-height: 1.15; text-decoration: none; word-break: break-word } .default-heading1 { color: #1F2D3D; font-family: arial,helvetica,sans-serif; font-size: 36px; word-break: break-word } .default-heading2 { color: #1F2D3D; font-family: arial,helvetica,sans-serif; font-size: 32px; word-break: break-word } .default-heading3 { color: #1F2D3D; font-family: arial,helvetica,sans-serif; font-size: 24px; word-break: break-word } .default-heading4 { color: #1F2D3D; font-family: arial,helvetica,sans-serif; font-size: 18px; word-break: break-word } a[x-apple-data-detectors] { color: inherit !important; text-decoration: inherit !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; } .no-show-for-you { border: none; display: none; float: none; font-size: 0; height: 0; line-height: 0; max-height: 0; mso-hide: all; overflow: hidden; table-layout: fixed; visibility: hidden; width: 0; } </style><!--[if mso]><xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml><![endif]--><style type="text/css">a:link{color: #696969; text-decoration: underline;}</style></head><body bgcolor="#ffffff" text="#3b3f44" link="#696969" yahoo="fix" style="background-color: #ffffff;"> <table cellspacing="0" cellpadding="0" border="0" role="presentation" class="nl2go-body-table" width="100%" style="background-color: #ffffff; width: 100%;"><tr><td> <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="600" align="center" class="r0-o" style="table-layout: fixed; width: 600px;"><tr><td valign="top" class="r1-i" style="background-color: #ffffff;"> <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" align="center" class="r3-o" style="table-layout: fixed; width: 100%;"><tr><td class="r4-i" style="background-color: #ffffff; padding-bottom: 20px; padding-top: 20px;"> <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation"><tr><th width="100%" valign="top" class="r5-c" style="font-weight: normal;"> <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r6-o" style="table-layout: fixed; width: 100%;"><tr><td valign="top" class="r7-i" style="padding-left: 15px; padding-right: 15px;"> <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation"><tr><td class="r2-c" align="center"> <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="200" class="r3-o" style="table-layout: fixed; width: 200px;"><tr><td style="font-size: 0px; line-height: 0px;"> <img src="https://creative-assets.mailinblue.com/editor/templates/logo-placeholder.png" width="200" border="0" style="display: block; width: 100%;"></td> </tr></table></td> </tr></table></td> </tr></table></th> </tr></table></td> </tr></table><table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" align="center" class="r3-o" style="table-layout: fixed; width: 100%;"><tr><td class="r8-i" style="padding-bottom: 20px; padding-top: 20px;"> <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation"><tr><th width="100%" valign="top" class="r5-c" style="font-weight: normal;"> <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r6-o" style="table-layout: fixed; width: 100%;"><tr><td valign="top" class="r7-i"> <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation"><tr><td class="r9-c" align="left"> <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r10-o" style="table-layout: fixed; width: 100%;"><tr><td align="center" valign="top" class="r11-i nl2go-default-textstyle" style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; word-break: break-word; padding-top: 15px; text-align: center;"> <div><h1 class="default-heading1" style="margin: 0; color: #1f2d3d; font-family: arial,helvetica,sans-serif; font-size: 36px; word-break: break-word;">Technical Exam Invitation Email</h1><p style="margin: 0;"> </p></div> </td> </tr></table></td> </tr><tr><td class="r12-c" align="center" style="font-size: 0px; line-height: 0px; padding-bottom: 15px; padding-top: 15px; valign: top;"> <img src="https://creative-assets.mailinblue.com/editor/templates/image-placeholder-2x-3.png" width="600" border="0" style="display: block; width: 100%;"></td> </tr><tr><td class="r13-c nl2go-default-textstyle" align="left" style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; word-break: break-word; padding-bottom: 15px; padding-top: 15px; text-align: left; valign: top;"> <div><p style="margin: 0; background-font-weight: normal;">${organization} has invited you to do technical examination. Use the button below to set up your account and get started:</p></div> </td> </tr><tr><td class="r14-c" align="center" style="align: center; padding-bottom: 15px; padding-top: 15px; valign: top;"> <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="300" class="r15-o" style="background-color: #1B1B1B; border-collapse: separate; border-color: #1B1B1B; border-radius: 4px; border-style: solid; border-width: 0px; table-layout: fixed; width: 300px;"><tr><td height="18" align="center" valign="top" class="r16-i nl2go-default-textstyle" style="word-break: break-word; background-color: #1B1B1B; border-radius: 4px; color: #ffffff; font-family: arial,helvetica,sans-serif; font-size: 16px; font-style: normal; line-height: 1.15; padding-bottom: 12px; padding-left: 5px; padding-right: 5px; padding-top: 12px; text-align: center;"> <a href="${examURL}" class="r17-r default-button" target="_blank" data-btn="1" style="font-style: normal; font-weight: bold; line-height: 1.15; text-decoration: none; word-break: break-word; word-wrap: break-word; display: block; -webkit-text-size-adjust: none; color: #ffffff; font-family: arial,helvetica,sans-serif; font-size: 16px;"> <span>Take an examination</span></a> </td> </tr></table></td> </tr></table></td> </tr></table></th> </tr></table></td> </tr></table><table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" align="center" class="r3-o" style="table-layout: fixed; width: 100%;"><tr><td class="r18-i" style="background-color: #eff2f7; padding-bottom: 20px; padding-top: 20px;"> <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation"><tr><th width="100%" valign="top" class="r5-c" style="font-weight: normal;"> <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r6-o" style="table-layout: fixed; width: 100%;"><tr><td valign="top" class="r7-i" style="padding-left: 15px; padding-right: 15px;"> <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation"><tr><td class="r9-c" align="left"> <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r10-o" style="table-layout: fixed; width: 100%;"><tr><td align="center" valign="top" class="r19-i nl2go-default-textstyle" style="font-family: arial,helvetica,sans-serif; word-break: break-word; color: #3b3f44; font-size: 18px; line-height: 1.5; padding-top: 15px; text-align: center;"> <div><p style="margin: 0;"><strong>STS</strong></p></div> </td> </tr></table></td> </tr><tr><td class="r9-c" align="left"> <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r10-o" style="table-layout: fixed; width: 100%;"><tr><td align="center" valign="top" class="r20-i nl2go-default-textstyle" style="font-family: arial,helvetica,sans-serif; word-break: break-word; color: #3b3f44; font-size: 18px; line-height: 1.5; text-align: center;"> <div><p style="margin: 0; font-size: 14px;">32 Hong Ha, 700000, HCM</p></div> </td> </tr></table></td> </tr><tr><td class="r21-c" align="center"> <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" align="center" class="r3-o" style="table-layout: fixed; width: 100%;"><tr><td valign="top" class="r22-i" style="padding-bottom: 15px;"> <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation"><tr><td class="r23-c" align="center"> <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="129" class="r24-o" style="table-layout: fixed;"><tr><td height="48" style="font-size: 0px; line-height: 0px;"></td> </tr></table></td> </tr></table></td> </tr></table></td> </tr></table></td> </tr></table></th> </tr></table></td> </tr></table></td> </tr></table></td> </tr></table></body></html>
  `;
};
