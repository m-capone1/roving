interface Props {
  name: string;
}

export default function WaitlistConfirmation({ name: _name }: Props) {
  const linkStyle = { color: "#014BAA", textDecoration: "underline" };

  return (
    <div style={{ fontFamily: "Georgia, serif", maxWidth: 580, margin: "0 auto", padding: "48px 24px", color: "#1a1a1a", lineHeight: 1.7 }}>
      <div style={{ marginBottom: 40 }}>
        <span style={{ fontSize: 22, fontWeight: 700, color: "#014BAA", fontFamily: "sans-serif" }}>Roving</span>
      </div>

      <p style={{ fontSize: 16, marginBottom: 20 }}>Hey,</p>

      <p style={{ fontSize: 16, marginBottom: 20 }}>
        I&apos;m Maddy, CTO and co-founder at Roving.
      </p>

      <p style={{ fontSize: 16, marginBottom: 20 }}>
        I wanted to send you a proper hello because you joining our waitlist actually means a lot to us.
      </p>

      <p style={{ fontSize: 16, marginBottom: 20 }}>
        Not &ldquo;thanks for subscribing&rdquo; means a lot.
      </p>

      <p style={{ fontSize: 16, marginBottom: 20 }}>
        More like, &ldquo;someone out there saw what we&apos;re building and thought, hmm, these people might be onto something&rdquo; means a lot.
      </p>

      <p style={{ fontSize: 16, marginBottom: 20 }}>So thank you. Seriously.</p>

      <p style={{ fontSize: 16, marginBottom: 20 }}>
        Roving is building the financial home for AI agents. The place where agents can get funded, use money safely, follow spend limits, request approvals, and give you full visibility into what they are doing.
      </p>

      <p style={{ fontSize: 16, marginBottom: 20 }}>
        Because if AI agents are going to start booking flights, buying software, paying invoices, renewing subscriptions, ordering supplies and generally moving like the overachieving colleague nobody asked for, they need more than a card number and good intentions.
      </p>

      <p style={{ fontSize: 16, marginBottom: 8 }}>They need rules.</p>
      <p style={{ fontSize: 16, marginBottom: 8 }}>They need limits.</p>
      <p style={{ fontSize: 16, marginBottom: 8 }}>They need supervision.</p>
      <p style={{ fontSize: 16, marginBottom: 20 }}>
        They need someone to say, &ldquo;why exactly did you try to buy 12 ergonomic chairs?&rdquo;
      </p>

      <p style={{ fontSize: 16, marginBottom: 20 }}>That is where Roving comes in.</p>

      <p style={{ fontSize: 16, marginBottom: 20 }}>
        But we also do not want this to be one of those startups that only talks at people. We want to get to know you too.
      </p>

      <p style={{ fontSize: 16, marginBottom: 20 }}>
        What are you building? Are you using agents already? What would make you trust an AI agent with money? What would scare you? What should we absolutely not build? What would make you say, &ldquo;finally, someone gets it&rdquo;?
      </p>

      <p style={{ fontSize: 16, marginBottom: 20 }}>That is the kind of stuff we want to hear.</p>

      <p style={{ fontSize: 16, marginBottom: 20 }}>
        You will get early product updates, founder notes, first access, event invites, behind-the-scenes gist, and the occasional &ldquo;we changed one small thing and accidentally redesigned the entire flow&rdquo; update.
      </p>

      <p style={{ fontSize: 16, marginBottom: 20 }}>
        You can also{" "}
        <a href="https://www.linkedin.com/company/rovinghq" style={linkStyle}>follow us on LinkedIn</a>
        {" "}and{" "}
        <a href="https://x.com/rovinghq" style={linkStyle}>X</a>
        , tell a few smart, curious people about us, and join our{" "}
        <a href="https://discord.gg/74WTEkwCy" style={linkStyle}>Discord community</a>
        {" "}for updates, gists, events and proper conversations with us as we build.
      </p>

      <p style={{ fontSize: 16, marginBottom: 40 }}>We are glad you are here. Truly.</p>

      <p style={{ fontSize: 16, marginBottom: 4 }}>More soon,</p>
      <p style={{ fontSize: 16, marginBottom: 4, fontWeight: 600 }}>Maddy</p>
      <p style={{ fontSize: 15, color: "#555" }}>CTO and Co-founder, Roving</p>

      <div style={{ borderTop: "1px solid #e5e7eb", marginTop: 48, paddingTop: 24, fontSize: 13, color: "#999", fontFamily: "sans-serif" }}>
        <p style={{ margin: 0 }}>Roving Financial, Inc.</p>
      </div>
    </div>
  );
}
