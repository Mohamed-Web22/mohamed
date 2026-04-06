from pathlib import Path

files = [
    Path('tailwind.config.js'),
    Path('src/index.css'),
    Path('src/components/Footer/Footer.jsx'),
    Path('src/pages/Services/Services.jsx'),
    Path('src/pages/Home/Home.jsx'),
    Path('src/components/Navbar/Navbar.jsx'),
]

replacements = [
    # Tailwind config exact colors
    ("primary: '#191970'", "primary: '#0f2145'"),
    ("secondary: '#F5DEB3'", "secondary: '#e9efff'"),
    ("'primary-dark': '#121250'", "'primary-dark': '#0f2145'"),
    ("'primary-light': '#2a2a8a'", "'primary-light': '#414d76'"),
    ("navy: '#191970'", "navy: '#0f2145'"),
    ("beige: '#F5DEB3'", "beige: '#e9efff'"),
    ("'navy-dark': '#121250'", "'navy-dark': '#0f2145'"),
    ("'accent-blue': '#2a4a7f'", "'accent-blue': '#414d76'"),
    ("'accent-gold': '#D4A574'", "'accent-gold': '#d2a517'"),
    # CSS base
    ("background-color: theme('colors.beige');", "background-color: theme('colors.primary');"),
    ("color: theme('colors.navy');", "color: theme('colors.secondary');"),
    (".bg-white {", ".bg-white {\n    background-color: theme('colors.secondary');"),
    # Navbar button gradient
    ("from-[#d2a517] to-[#b8941a]", "from-[#d2a517] to-[#414d76]"),
    # brand palette conversions
    ("from-cyan-500 to-blue-500", "from-[#d2a517] to-[#414d76]"),
    ("from-cyan-500/20 to-blue-500/20", "from-[#d2a517]/20 to-[#414d76]/20"),
    ("bg-cyan-500/90", "bg-[#d2a517]/90"),
    ("bg-cyan-500/10", "bg-[#d2a517]/10"),
    ("bg-blue-500/10", "bg-[#414d76]/10"),
    ("text-slate-400", "text-[#e9efff]/80"),
    ("text-slate-500", "text-[#e9efff]/70"),
    ("shadow-cyan-500/20", "shadow-[#d2a517]/20"),
    ("shadow-cyan-500/25", "shadow-[#d2a517]/25"),
    ("shadow-cyan-500/30", "shadow-[#d2a517]/30"),
    ("focus:ring-cyan-500", "focus:ring-[#d2a517]"),
    ("hover:text-cyan-400", "hover:text-[#d2a517]"),
    ("bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600", "bg-gradient-to-r from-[#414d76] via-[#0f2145] to-[#414d76]"),
    ("from-amber-500 to-yellow-500", "from-[#d2a517] to-[#414d76]"),
    ("from-amber-500/20 to-yellow-500/20", "from-[#d2a517]/20 to-[#414d76]/20"),
    ("text-amber-400", "text-[#d2a517]"),
    ("bg-slate-900", "bg-[#0f2145]"),
    ("bg-slate-800/90", "bg-[#0f2145]/90"),
    ("bg-slate-800/50", "bg-[#0f2145]/70"),
    ("bg-slate-800/40", "bg-[#0f2145]/40"),
    ("bg-slate-800", "bg-[#141f3b]"),
    ("border-slate-700/30", "border-[#414d76]/30"),
    ("border-slate-700/50", "border-[#414d76]/50"),
    ("text-slate-300", "text-[#e9efff]/80"),
    ("text-slate-700", "text-[#414d76]"),
    ("bg-amber-500/20", "bg-[#d2a517]/20"),
    ("border-amber-500/30", "border-[#d2a517]/30"),
    ("focus:border-amber-500", "focus:border-[#d2a517]"),
    ("focus:ring-2 focus:ring-amber-500/20", "focus:ring-2 focus:ring-[#d2a517]/20"),
    ("hover:bg-amber-500", "hover:bg-[#d2a517]"),
    ("text-amber-500", "text-[#d2a517]"),
    ("fill-yellow-500", "fill-[#d2a517]"),
    ("bg-amber-500/50", "bg-[#d2a517]/50"),
    ("bg-amber-500/5", "bg-[#d2a517]/5"),
    ("bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600", "bg-gradient-to-r from-[#d2a517] via-[#414d76] to-[#d2a517]"),
    ("bg-gradient-to-br from-slate-800 to-slate-900", "bg-gradient-to-br from-[#141f3b] to-[#0f2145]"),
    ("bg-gradient-to-br from-slate-800/90 via-slate-800/95 to-slate-900/90", "bg-gradient-to-br from-[#141f3b]/90 via-[#0f2145]/95 to-[#0f2145]/90"),
    ("bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900", "bg-gradient-to-r from-[#0f2145] via-[#141f3b] to-[#0f2145]"),
    ("bg-slate-900/90", "bg-[#0f2145]/90"),
    ("bg-slate-900/40", "bg-[#0f2145]/40"),
    ("bg-slate-900/50", "bg-[#0f2145]/50"),
    ("text-slate-600", "text-[#e9efff]/65"),
]

for path in files:
    text = path.read_text(encoding='utf-8')
    original = text
    for old, new in replacements:
        text = text.replace(old, new)
    if text != original:
        path.write_text(text, encoding='utf-8')
        print(f'Updated {path}')
