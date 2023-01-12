import javax.enterprise.context.ApplicationScoped;
import org.eclipse.microprofile.reactive.messaging.Outgoing;

@ApplicationScoped
public class MessageProducer {

    @POST
    @Path("/send-email")
    @Outgoing("email-queue")
    public String sendEmail(String email) {
        return email;
    }

}
