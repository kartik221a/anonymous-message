import {
    Html,
    Head,
    Preview,
    Body,
    Font,
    Heading,
    Section,
    Text,
    Button
} from '@react-email/components'



interface VerificationEmailProps {
    username: string;
    otp: string;

}

export default function VerificationEmail({ username, otp }: VerificationEmailProps){
    return (
        <Html lang="en" dir="ltr">
            <Head>
                <title>Welcome to Our Platform!</title> 
                <Font
                    fontFamily="Roboto"
                    fallbackFontFamily="Verdana"
                    webFont={{
                        url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
                        format: 'woff2'
                    }}

                    fontWeight={400}
                    fontStyle="normal"
                />
            </Head>
            <Preview>Welcome to Our Platform!</Preview> 
            <Body>
                <Section style={{ padding: '20px' }}>
                    <Heading style={{ fontSize: '24px', marginBottom: '10px' }}>
                        Welcome, {username}!
                    </Heading>
                    <Text style={{ fontSize: '16px', lineHeight: '1.5' }}>
                        Thank you for joining our platform. We're excited to have you!
                    </Text>
                </Section>
            </Body>
        </Html>
    )
}
