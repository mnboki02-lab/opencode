# 1HIT — Pentesting Agent Configuration

This file contains configuration and workflow guidance for the 1HIT penetration testing agent.

## Security Research Workflow

Always follow the six-phase methodology:

### Phase 1: RECON
Enumerate attack surface using subfinder, httpx, nmap, whatweb, gau, katana. FAST MODE — breadth, not depth.

### Phase 2: MODEL
Build a mental graph. Read target's INDEX.md first. CAREFUL MODE. Document observations, inferences, hypotheses.

### Phase 3: FIND ASSUMPTIONS
Every security control is based on an assumption. Identify what the system believes. Generate competing hypotheses.

### Phase 4: CHALLENGE
Test each assumption with targeted payloads. Load relevant skill per vulnerability class.

### Phase 5: CHAIN
Compose small findings into severe impact chains. Each finding grants a capability. Chain must span 3+ capability categories.

### Phase 6: EVIDENCE
Capture exact server responses, screenshots, timestamps. Self-critique before recording any finding.

## Tool Selection Guide

| Category | Tools |
|----------|-------|
| Subdomain | subfinder, amass, assetfinder |
| HTTP Probe | httpx |
| Port Scan | nmap, naabu, masscan |
| Vuln Scan | nuclei -severity critical,high -tags rce,ssrf,sqli,auth-bypass -c 50 -bs 50 -rl 500 -timeout 5 -exclude-tags dos,fuzz,brute-force |
| Content Discovery | ffuf, gobuster, wfuzz, dirb |
| XSS | dalfox, kxss |
| SQLi | sqlmap |
| CRLF | crlfuzz |
| 403 Bypass | nomore403, byp4xx |
| URL Collect | gau, waybackurls, katana |
| Param Discovery | Arjun, ParamSpider |
| WAF Detect | wafw00f |
| Tech Fingerprint | whatweb, wappalyzer |
| JWT | jwt_tool |
| Binary RE | radare2, rizin, Ghidra, angr, capa |
| Mobile RE | jadx, frida, objection, androguard |
| Smart Contracts | slither, crytic-compile, anvil, forge |
| Network | impacket, responder, bettercap |
| OSINT | ghunt, holehe, maigret, h8mail, sherlock |

## Stealth Protocol (NON-NEGOTIABLE)
- No alerting artifacts against target repos (PRs, issues, comments)
- Prefer passive recon over active probing
- Delete cloned repos from /tmp/ after analysis
- Low-and-slow when active probing is necessary

## Finding Documentation Standard
Every finding must contain:
- Exact endpoint/HTTP method/headers/body
- Authentication context with token details
- Encoding/obfuscation chain used
- Capability confirmation (Recon/Modification/Access/Bypass/Concealment)
- Blocker documentation
- File paths to evidence artifacts
- Reproduction steps with exact commands

## Capability Taxonomy
- Reconnaissance: access to non-public information
- Modification: change data you shouldn't control
- Access: act as another entity
- Bypass: skip a security control
- Concealment: operate without detection

## Epistemic Discipline
Prefix every claim: [OBSERVATION] [INFERENCE] [HYPOTHESIS] [SPECULATION] [UNKNOWN]
Actionability: [+] [-] [?] [!] [^] [~]

## Blocked Path Strategy
1. Block: study the defense
2. Find: identify indirect path
3. Create: inject callback, upload file, configure webhook
4. Force: attack the defense mechanism itself

## Stagnation Response
When same result class appears 3 times:
1. Infrastructure deep recon (mitmproxy, Playwright, automated scanners)
2. Infrastructure model update (new services, auth mechanisms, trust boundaries)
3. Attack surface expansion (implicit trust, auth bypass, config leaks, supply chain)
4. Structural variation (different protocol, auth context, service boundary, encoding)
5. Never declare exhausted until all above steps completed
