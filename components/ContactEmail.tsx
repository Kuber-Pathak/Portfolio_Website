import {
  Html,
  Head,
  Font,
  Preview,
  Body,
  Container,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Link,
  Tailwind,
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
  const initial = (name?.trim()?.[0] || "?").toUpperCase();
  const firstName = name?.trim()?.split(/\s+/)[0] || "them";
  const received = new Date().toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: "Asia/Kathmandu",
  });
  return (
    <Html lang="en">
      <Head>
        <title>New Portfolio Inquiry</title>
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Helvetica"
          webFont={{
            url: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <Font
          fontFamily="JetBrains Mono"
          fallbackFontFamily="monospace"
          webFont={{
            url: "https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjPVmUsaaDhw.woff2",
            format: "woff2",
          }}
          fontWeight={500}
          fontStyle="normal"
        />
      </Head>

      <Preview>New message from {name} via your portfolio contact form</Preview>

      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                bg: "#F2F4F8",
                surface: "#FFFFFF",
                soft: "#F7F8FB",
                ink: "#0E1726",
                ink2: "#1E293B",
                muted: "#64748B",
                faint: "#94A0B4",
                line: "#E5E9F1",
                lineSoft: "#EBEFF5",
                accent: "#FF2D55",
              },
              fontFamily: {
                sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
              },
            },
          },
        }}
      >
        <Body className="bg-bg m-0 p-0 font-sans">
          <Container className="w-[600px] max-w-[600px] mx-auto pt-6 pb-2">
            {/* ── CARD ── */}
            <Section className="bg-surface border border-solid border-line rounded-2xl overflow-hidden shadow-[0_10px_30px_-12px_rgba(15,23,42,0.12)]">
              {/* accent rule */}
              <div className="h-1 leading-[4px] text-[4px] bg-accent">&nbsp;</div>

              {/* HEADER */}
              <Section className="px-10 pt-[34px] pb-[26px]">
                <Row>
                  <Column className="align-middle">
                    <table role="presentation" cellPadding={0} cellSpacing={0} border={0}>
                      <tr>
                        <td className="w-[34px] h-[34px] bg-ink rounded-[9px] text-center text-white font-mono text-[13px] font-semibold">KP</td>
                        <td className="pl-3 font-mono text-xs tracking-[0.14em] uppercase text-ink2 font-medium">Kuber&nbsp;Pathak</td>
                      </tr>
                    </table>
                  </Column>
                  <Column align="right" className="align-middle">
                    <span className="inline-block bg-[rgba(255,45,85,0.10)] text-accent font-mono text-[10px] font-semibold tracking-[0.16em] uppercase px-[11px] py-1.5 rounded-full">● New</span>
                  </Column>
                </Row>

                <Text className="mt-7 mb-0 font-mono text-[11px] tracking-[0.22em] uppercase text-accent font-semibold">New Portfolio Inquiry</Text>
                <Heading as="h1" className="mt-3 mb-0 font-sans text-[28px] leading-[1.15] tracking-[-0.02em] text-ink font-extrabold">You&apos;ve got a new message</Heading>
                <Text className="mt-2.5 mb-0 font-sans text-[15px] leading-[1.6] text-muted">Someone just reached out through your portfolio contact form.</Text>
              </Section>

              {/* elegant divider: line · dot · line */}
              <Section className="px-10">
                <table role="presentation" width="100%" cellPadding={0} cellSpacing={0} border={0}>
                  <tr>
                    <td className="h-px bg-line leading-[1px] text-[1px]">&nbsp;</td>
                    <td className="w-[7px] px-2"><div className="w-[5px] h-[5px] rounded-full bg-[#CBD3E0]"></div></td>
                    <td className="h-px bg-line leading-[1px] text-[1px]">&nbsp;</td>
                  </tr>
                </table>
              </Section>

              {/* CONTACT CARD */}
              <Section className="px-10 pt-7 pb-2">
                <table role="presentation" width="100%" cellPadding={0} cellSpacing={0} border={0} className="bg-soft border border-solid border-lineSoft rounded-[14px]">
                  <tr>
                    <td className="px-6 py-[22px]">
                      {/* sender identity */}
                      <table role="presentation" cellPadding={0} cellSpacing={0} border={0}>
                        <tr>
                          <td className="w-[46px] h-[46px] bg-accent rounded-xl text-center align-middle text-white font-sans text-[19px] font-bold">{initial}</td>
                          <td className="pl-[14px] align-middle">
                            <div className="font-sans text-[17px] font-bold text-ink tracking-[-0.01em] leading-tight">{name}</div>
                            <Link href={`mailto:${email}`} className="font-mono text-[12.5px] text-accent no-underline">{email}</Link>
                          </td>
                        </tr>
                      </table>

                      <div className="h-px bg-lineSoft mt-[18px] mb-4"></div>

                      {/* meta rows */}
                      <table role="presentation" width="100%" cellPadding={0} cellSpacing={0} border={0}>
                        <tr>
                          <td className="py-[7px] w-[120px] font-mono text-[10.5px] tracking-[0.12em] uppercase text-faint font-medium align-top">Received</td>
                          <td className="py-[7px] font-sans text-sm text-ink2 font-medium">{received}</td>
                        </tr>
                        <tr>
                          <td className="py-[7px] w-[120px] font-mono text-[10.5px] tracking-[0.12em] uppercase text-faint font-medium align-top">Reply to</td>
                          <td className="py-[7px] font-sans text-sm text-ink2 font-medium">{email}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </Section>

              {/* MESSAGE */}
              <Section className="px-10 pt-5 pb-1">
                <Text className="mt-0 mb-3 font-mono text-[10.5px] tracking-[0.18em] uppercase text-faint font-semibold">Message</Text>
                <table role="presentation" width="100%" cellPadding={0} cellSpacing={0} border={0} className="bg-surface border border-solid border-line rounded-[14px]">
                  <tr>
                    <td className="px-6 py-[22px] font-sans text-[15px] leading-[1.72] text-ink2 whitespace-pre-wrap">{message}</td>
                  </tr>
                </table>
              </Section>

              {/* CTA */}
              <Section className="px-10 pt-6 pb-9">
                <table role="presentation" cellPadding={0} cellSpacing={0} border={0}>
                  <tr>
                    <td className="bg-accent rounded-lg">
                      <Link href={`mailto:${email}`} className="inline-block px-[26px] py-[14px] font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-white no-underline">Reply to {firstName} →</Link>
                    </td>
                  </tr>
                </table>
              </Section>
            </Section>

            {/* FOOTER */}
            <Section className="px-6 pt-6 pb-2 text-center">
              <Text className="m-0 font-mono text-[11px] tracking-[0.10em] text-faint leading-[1.7]">Sent automatically from your portfolio contact form.</Text>
              <Text className="mt-1.5 mb-0 font-sans text-xs text-[#AAB3C2]">kuberpathak.dev · You&apos;re receiving this because someone used the contact form.</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
