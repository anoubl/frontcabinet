import emailjs from '@emailjs/browser';

export async function sendEmails(patientEmail, toName, appointmentDate,heure) {
    try {
        // Initialize EmailJS with the correct user ID
        await emailjs.init('6u_vSTaBPGV6cJjC0');

        // Template for the patient
        const patientTemplateParams = {
            patient_email: patientEmail,
            to_name: toName,
            date_du_rendez_vous: appointmentDate,
            heure_du_rendez_vous:heure
        };

        // Template for the doctor
        const doctorTemplateParams = {
            patient_name: toName,
            appointment_date: appointmentDate,
            heure_du_rendez_vous:heure
        };

        // Send email for the patient
        const patientEmailResponse = await emailjs.send('service_f86rwjt', 'template_f30ek75', patientTemplateParams);
        console.log('Patient Email Sent:', patientEmailResponse.status, patientEmailResponse.text);

        // Send email for the doctor
        const doctorEmailResponse = await emailjs.send('service_f86rwjt', 'template_jcvmq4e', doctorTemplateParams);
        console.log('Doctor Email Sent:', doctorEmailResponse.status, doctorEmailResponse.text);
    } catch (error) {
        console.error('Error sending emails:', error);
    }
}
