import sgMail from '@sendgrid/mail';

export const envio = async (datos) => {
  const { nombre, email, telefono, tipoProyecto, detalles } = datos;
  const info = {
    from: 'dinaelaragon@agos.mx',
    to: 'dinaelaragon@agos.mx',
    subject: `Paciente: ${nombre}`,
    text: `Email: ${email}`,
    html: `
    <p>Nombre: ${nombre}</p>
    <p>Email: ${email}</p>
    <p>Telefono: ${telefono}</p>
    <p>Tipo de proyecto: ${tipoProyecto}</p>
    <p>Detalles: ${detalles}</p>
    `
  };
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  sgMail
    .send(info)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
};

