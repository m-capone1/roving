export default function NetworkWelcome() {
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
        If you&apos;re getting this, it means you&apos;ve either joined our network, shown interest in the community, or somehow found yourself orbiting our little corner of the agent economy.
      </p>

      <p style={{ fontSize: 16, marginBottom: 20 }}>
        Either way, welcome. We&apos;re glad you&apos;re here.
      </p>

      <p style={{ fontSize: 16, marginBottom: 20 }}>
        We&apos;re building <strong>The Rovers&apos; Playground</strong>, our community for people curious about AI agents, money, automation, startups, and the slightly chaotic future we all seem to be walking into together.
      </p>

      <p style={{ fontSize: 16, marginBottom: 20 }}>
        This is not a polished corporate community where everyone says &ldquo;great insight&rdquo; and disappears.
      </p>

      <p style={{ fontSize: 16, marginBottom: 20 }}>
        It&apos;s more of a group chat with ambition.
      </p>

      <p style={{ fontSize: 16, marginBottom: 20 }}>
        A place for builders, operators, founders, researchers, curious people, early believers and professional overthinkers to share ideas, ask questions, join events, test thoughts, give feedback, and maybe help shape what Roving becomes.
      </p>

      <p style={{ fontSize: 16, marginBottom: 20 }}>
        We&apos;ll share product updates, behind-the-scenes gists, early invites, community sessions, meetups, demos, and the occasional &ldquo;we tried something and it nearly worked&rdquo; update.
      </p>

      <p style={{ fontSize: 16, marginBottom: 20 }}>
        We also want to get to know you.
      </p>

      <p style={{ fontSize: 16, marginBottom: 20 }}>
        What are you building? What are you curious about? Are you using agents already? What scares you about agents touching money? What would make you trust them? What do you think everyone else is missing?
      </p>

      <p style={{ fontSize: 16, marginBottom: 20 }}>
        Come in, say hi, and don&apos;t be shy. We&apos;re friendly. Mostly.
      </p>

      <p style={{ fontSize: 16, marginBottom: 20 }}>
        Join us here:{" "}
        <a href="https://discord.gg/74WTEkwCy" style={linkStyle}>
          https://discord.gg/74WTEkwCy
        </a>
      </p>

      <p style={{ fontSize: 16, marginBottom: 20 }}>See you in the Playground,</p>

      <p style={{ fontSize: 16, marginBottom: 4, fontWeight: 600 }}>Maddy</p>
      <p style={{ fontSize: 15, color: "#555" }}>CTO and Co-founder, Roving</p>

      <div style={{ borderTop: "1px solid #e5e7eb", marginTop: 48, paddingTop: 24, fontSize: 13, color: "#999", fontFamily: "sans-serif" }}>
        <p style={{ margin: 0 }}>Roving Financial, Inc.</p>
      </div>
    </div>
  );
}
