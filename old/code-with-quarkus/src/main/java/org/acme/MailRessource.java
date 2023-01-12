package org.acme;

import io.quarkus.mailer.Mail;
import io.quarkus.mailer.Mailer;
import io.smallrye.common.annotation.Blocking;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("/mail")                                                          
public class MailRessource {

    @Inject Mailer mailer;                                              

    @GET                                                                
    @Blocking                                                           
    public void sendEmail() {
        mailer.send(
                Mail.withText("dark.yami22400@gmail.com",                     
                    "Menaces",
                    "Je connais ton identité."
                )
        );
    }

}