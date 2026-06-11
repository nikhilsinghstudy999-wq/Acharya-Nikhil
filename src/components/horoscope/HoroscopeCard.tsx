interface Props { sign:string; date:string; content:string; }
export default function HoroscopeCard({sign,date,content}:Props) {
  const paragraphs = content.split('\n').filter(l=>l.trim());
  return (
    <article className="glass-card p-8 my-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-serif text-gold capitalize">{sign} Daily Horoscope</h2>
      <time className="text-white/50" dateTime={date}>{date}</time>
      <div className="mt-6 space-y-4 text-white/90">{paragraphs.map((p,i)=><p key={i}>{p}</p>)}</div>
    </article>
  );
}
