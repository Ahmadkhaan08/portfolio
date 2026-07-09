import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Copy, Mail, Send, Sparkles } from "lucide-react";
import { toast } from "sonner";

function Field({ label, error, children }) {
  return (
    <label className="block">
      <div className="mb-1.5 flex items-center justify-between text-xs text-muted-foreground">
        <span>{label}</span>
        {error && <span className="text-destructive">{error}</span>}
      </div>
      {children}
    </label>
  );
}

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errs, setErrs] = useState({});
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    // e.preventDefault();
    // const errors = {};
    // if (form.name.trim().length < 2) errors.name = "Please enter your name";
    // if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Please enter a valid email";
    // if (form.message.trim().length < 10) errors.message = "Message should be at least 10 characters";
    // setErrs(errors);
    // if (Object.keys(errors).length) return;
    // setSent(true);

    e.preventDefault();

    const errors = {};

    if (form.name.trim().length < 2) errors.name = "Please enter your name";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errors.email = "Please enter a valid email";

    if (form.message.trim().length < 10)
      errors.message = "Message should be at least 10 characters";

    setErrs(errors);

    if (Object.keys(errors).length) return;

    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORM_KEY || "",

          name: form.name,
          email: form.email,
          message: form.message,

          subject: "Portfolio Contact Form",
          from_name: "Ahmad Ismail Portfolio",
          replyto: form.email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSent(true);
        setForm({
          name: "",
          email: "",
          message: "",
        });

        toast.success("Message sent successfully!");
      } else {
        toast.error(result.message || "Something went wrong.");
      }
    } catch (error) {
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText("mrahmadismail13@gmail.com");
    setCopied(true);
    toast.success("Email copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="glass gradient-border relative overflow-hidden rounded-[2.5rem] p-10 md:p-16">
          <div
            aria-hidden
            className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[color:var(--purple)]/25 blur-[100px]"
          />
          <div
            aria-hidden
            className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[color:var(--electric)]/25 blur-[100px]"
          />
          <div className="relative grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[color:var(--electric)]">
                07 · Contact
              </p>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Let's create
                <br />
                <span className="gradient-text">the next big thing.</span>
              </h2>
              <p className="mt-6 max-w-md text-muted-foreground">
                I am always open to internships, full-time opportunities,
                freelance projects, open-source collaborations, and innovative
                ideas. If you're building something exciting or looking for a
                passionate Full Stack Developer, let's connect and make it
                happen.
              </p>
              <button
                onClick={copyEmail}
                className="group mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-mono transition hover:border-white/30"
              >
                <Mail className="h-4 w-4 text-[color:var(--electric)]" />
                mrahmadismail13@gmail.com
                <span className="text-muted-foreground">
                  {copied ? (
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </span>
              </button>
            </div>

            <div>
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="sent"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex h-full flex-col items-center justify-center gap-4 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="grid h-16 w-16 place-items-center rounded-full bg-emerald-500/20 text-emerald-400"
                    >
                      <Check className="h-8 w-8" />
                    </motion.div>
                    <h3 className="text-2xl font-semibold">Message received</h3>
                    <p className="text-sm text-muted-foreground">
                      I'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={submit}
                    className="space-y-4"
                    noValidate
                  >
                    <Field label="Name" error={errs.name}>
                      <input
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition placeholder:text-muted-foreground focus:border-[color:var(--electric)] focus:bg-white/10"
                        placeholder="Your name"
                      />
                    </Field>
                    <Field label="Email" error={errs.email}>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition placeholder:text-muted-foreground focus:border-[color:var(--electric)] focus:bg-white/10"
                        placeholder="you@company.com"
                      />
                    </Field>
                    <Field label="Message" error={errs.message}>
                      <textarea
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        rows={5}
                        className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition placeholder:text-muted-foreground focus:border-[color:var(--electric)] focus:bg-white/10"
                        placeholder="Tell me about your project..."
                      />
                    </Field>
                    <button
                      type="submit"
                      disabled={loading}
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3.5 text-sm font-medium text-white shadow-[0_10px_40px_-10px_rgba(79,140,255,0.6)] transition hover:shadow-[0_10px_60px_-10px_rgba(123,97,255,0.8)] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      <Send className="h-4 w-4" />
                      {loading ? "Sending..." : "Send Message"}
                    </button> 
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
