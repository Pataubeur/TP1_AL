package org.acme;

import io.quarkus.mailer.Mail;
import io.quarkus.mailer.Mailer;
import io.smallrye.common.annotation.Blocking;
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
    //@Blocking
    public Response sendEmail() {
        mailer.send(Mail.withText(
                "arthur.allain35310@gmail.com",
                "Réussite",
                "Quaarkus de mes deux"));
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