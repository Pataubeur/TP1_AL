package org.acme;

import io.quarkus.mailer.Mail;
import io.quarkus.mailer.Mailer;
import io.quarkus.mailer.reactive.ReactiveMailer;
import io.smallrye.mutiny.Uni;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;


@Path("/mail")
public class MailResource {

    @Inject
    Mailer mailer;

    @GET
    public Response sendEmail() {
        mailer.send(Mail.withText(
                "quarkus@mail.io",
                "FR-Administration : Credential",
                "Credential for connection is : id=1 password=admin"));
        return Response.ok().build();
    }

    @Inject
    ReactiveMailer reactiveMailer;

    @GET
    @Path("/reactive")
    public Uni<Void> sendEmailUsingReactiveMailer() {
        return reactiveMailer.send(
                Mail.withText("quarkus@quarkus.io",
                        "Ahoy from Quarkus",
                        "A simple email sent from a Quarkus application using the reactive API."));

    }

}