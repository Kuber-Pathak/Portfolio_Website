import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Hr,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactEmail({
  name,
  email,
  message,
}: ContactEmailProps) {
  return (
    <Html lang="en">
      <Head>
        <title>New Contact Message</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>

      {/* Preview text shown in inbox */}
      <Preview>
        New message from {name} via your portfolio contact form
      </Preview>

      <Section style={{ padding: "20px", fontFamily: "Roboto" }}>
        <Heading as="h2">📩 New Contact Message</Heading>

        <Hr />

        <Row>
          <Text>
            <strong>Name:</strong> {name}
          </Text>
        </Row>

        <Row>
          <Text>
            <strong>Email:</strong> {email}
          </Text>
        </Row>

        <Hr />

        <Row>
          <Text>
            <strong>Message:</strong>
          </Text>
        </Row>

        <Row>
          <Text style={{ whiteSpace: "pre-wrap" }}>{message}</Text>
        </Row>
      </Section>
    </Html>
  );
}