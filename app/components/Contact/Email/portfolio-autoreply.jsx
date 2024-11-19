import {
    Tailwind,
    Body,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";

export default function PortfolioAutoreply(name) {
    return (
        <Html>
        <Head />
        <Preview>Thank you for reaching out!</Preview>
        <Tailwind>
            <Body>
                <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
                    <Section className="my-4">
                        <Img
                            src={`../public/Logo.svg`}
                            width="60"
                            height="60"
                            alt="Portfolio Logo"
                        />
                    </Section>
                    <Hr className="border border-solid border-[#eaeaea] my-0 mx-0 w-full" />
                    <Text>Hello {name},</Text>
                    <Text>Thank you for reaching out!
                    Your message through my website has been delivered.
                    I will get back to you as soon as possible.</Text>
                    <Text>Best Regards,</Text>
                    <Text>Ryan Jung</Text>
                    
                    <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                    <Text className="text-[#666666] text-[12px] leading-[24px]">
                    This message was intended for{" "}
                    <span className="text-black">{name}</span>. If you
                    were not expecting this invitation, you can ignore this email.
                    </Text>
                </Container>
            </Body>
    </Tailwind>
    </Html>
    );
}