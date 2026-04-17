import { Link } from "react-router-dom";
export default function Admin_Dashboard(){
    return(
        <div className="bg-surface text-on-surface">
            

<header className="fixed top-0 w-full z-50 bg-slate-50/80 backdrop-blur-xl transition-all duration-300 ease-in-out">
<div className="flex justify-between items-center px-8 h-16 w-full max-w-[1920px] mx-auto">
<div className="flex items-center gap-8">
<span className="text-xl font-bold tracking-tighter text-blue-900">Academic Atelier</span>
<nav className="hidden md:flex gap-6 items-center">
<a className="text-blue-900 font-semibold border-b-2 border-blue-900 pb-1 font-manrope tracking-tight text-sm" href="#">Analytics</a>
<a className="text-slate-500 hover:text-blue-700 transition-colors font-manrope tracking-tight text-sm" href="#">Newsroom</a>
<a className="text-slate-500 hover:text-blue-700 transition-colors font-manrope tracking-tight text-sm" href="#">Staff</a>
<a className="text-slate-500 hover:text-blue-700 transition-colors font-manrope tracking-tight text-sm" href="#">Settings</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="hidden lg:flex items-center bg-surface-container-low px-3 py-1.5 rounded-lg border-none">
<span className="material-symbols-outlined text-outline text-sm">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm w-48" placeholder="Search data..." type="text"/>
</div>
<div className="flex gap-2">
<button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-all active:scale-95">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-all active:scale-95">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
</button>
</div>
<button className="bg-primary text-on-primary px-5 py-2 rounded-full font-label text-sm font-semibold tracking-wide hover:opacity-90 active:scale-95 transition-all">
                    Publish News
                </button>
<img alt="Administrator profile photo" className="w-10 h-10 rounded-full object-cover border-2 border-surface-container" data-alt="Professional portrait of a male administrator in a light grey suit against a neutral office background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARZgAi8-HzW0BvvDV481LifA8lZKQIjlIVYyeVHsvXIM-GN7KHTjk4KEMm9vG1dCXUrFYE6wLhkf4yEe1tsYh6LRhPWBAo2ENG5ZUsIZIQfIV3EuylYUi1Dm6G2aQMaYcOujkNyDknrrPiDUmgcCa1ItA1q-cu0adhxCgzHtQ-6zFFLvHHvQ4vg_QRnWcqfDyzyBfahu2QLddprGVFwjC5ugbCLmvz-9lPPhmAqP0hyuuvJmaE5cGU0FXy_ax0veHHAYm4FbcQMmU"/>
</div>
</div>
<div className="bg-slate-200/50 h-[1px]"></div>
</header>

<aside className="h-screen w-64 fixed left-0 top-0 flex-col hidden lg:flex bg-slate-50 border-r border-slate-200/50 pt-20">
<div className="px-6 mb-8 flex items-center gap-3">
<div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
<img alt="School Crest" className="w-full h-full object-cover" data-alt="Modern geometric crest logo using navy and gold colors for a prestige academy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpzEIyDD6KcllarDmZC8MEqf1ln2GBUZiPsr98wUeh0ng_qOoQrIcnOsyFVwSfVq_sKTsm5_APPJbabDkqFIpwEnlcMb-E0Qpx1hmZyBnPyS2b4bL9x8FDU5GzhxbztN4_qxy1yhrnPgn5K4Y1VIBm0TiAIWpkdphMhwV1cpOzHUxSha8TqXw1Bp6AY3ZGCtbWBXzt7sqgYcm1NEbKqalcQxWmKstgUOTpgQKMy1WdBhRCCW47ZX_GC4MOwywP2dFXw2dJUJm2_h8"/>
</div>
<div>
<h2 className="text-lg font-bold text-blue-900 font-inter">Admin Portal</h2>
<p className="text-[10px] uppercase tracking-widest text-slate-500 font-medium">Prestige Academy</p>
</div>
</div>
<nav className="flex-grow flex flex-col gap-1">
<a className="bg-blue-50 text-blue-900 rounded-r-full mr-4 pl-6 py-3 flex items-center gap-3 font-inter text-sm font-medium transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                Dashboard
            </a>
<a className="text-slate-600 pl-6 py-3 hover:bg-slate-100 transition-all flex items-center gap-3 font-inter text-sm font-medium hover:translate-x-1 duration-200" href="/drafts">
<span className="material-symbols-outlined" data-icon="edit_note">edit_note</span>
                Drafts
            </a>
<a className="text-slate-600 pl-6 py-3 hover:bg-slate-100 transition-all flex items-center gap-3 font-inter text-sm font-medium hover:translate-x-1 duration-200" href="/published">
<span className="material-symbols-outlined" data-icon="auto_stories">auto_stories</span>
                Published
            </a>
<a className="text-slate-600 pl-6 py-3 hover:bg-slate-100 transition-all flex items-center gap-3 font-inter text-sm font-medium hover:translate-x-1 duration-200" href="/categories">
<span className="material-symbols-outlined" data-icon="bookmarks">bookmarks</span>
                Categories
            </a>
<a className="text-slate-600 pl-6 py-3 hover:bg-slate-100 transition-all flex items-center gap-3 font-inter text-sm font-medium hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="leaderboard">leaderboard</span>
                Analytics
            </a>
</nav>
<div className="px-6 pb-6 mt-auto">
<button className="w-full bg-secondary-container text-on-secondary-fixed-variant py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all">
<span className="material-symbols-outlined text-lg">add_circle</span>
                Create New Draft
            </button>
<div className="mt-6 flex flex-col gap-1">
<a className="text-slate-600 py-2 flex items-center gap-3 font-inter text-sm font-medium hover:text-blue-900 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="contact_support">contact_support</span>
                    Support
                </a>
<a className="text-slate-600 py-2 flex items-center gap-3 font-inter text-sm font-medium hover:text-error transition-all" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
                    Sign Out
                </a>
</div>
</div>
</aside>

<main className="lg:pl-64 pt-16 min-h-screen">
<div className="max-w-[1400px] mx-auto p-8 lg:p-12">

<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h1 className="text-4xl font-extrabold tracking-tighter text-primary mb-2">Executive Insights</h1>
<p className="text-on-surface-variant font-body">Welcome back, Administrator. Here's your weekly performance overview.</p>
</div>
<div className="flex gap-3">
<div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-lg text-sm font-medium text-on-surface-variant">
<span className="material-symbols-outlined text-sm">calendar_today</span>
                        Oct 24 - Oct 31, 2023
                    </div>
<button className="bg-surface-container-highest text-on-surface px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 active:scale-95 transition-all">
<span className="material-symbols-outlined text-sm">file_download</span>
                        Export Report
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">

<div className="md:col-span-2 lg:col-span-2 bg-surface-container-low p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between h-[240px]">
<div className="relative z-10">
<span className="label-md uppercase tracking-widest text-xs font-bold text-tertiary">Publication Volume</span>
<h3 className="text-6xl font-extrabold text-primary mt-4 tracking-tighter">1,284</h3>
<p className="text-on-tertiary-container font-medium mt-2 flex items-center gap-1">
<span className="material-symbols-outlined text-sm">trending_up</span>
                            +12.4% from last month
                        </p>
</div>
<div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10">
<span
  className="material-symbols-outlined text-[180px]"
  style={{ fontVariationSettings: "'FILL' 1" }}
>
  auto_stories
</span>
</div>
</div>

<div className="bg-surface-container p-8 rounded-3xl h-[240px] flex flex-col justify-between">
<div>
<div className="flex justify-between items-start">
<span className="label-md uppercase tracking-widest text-xs font-bold text-secondary">Engagement Score</span>
<span className="bg-secondary-container text-on-secondary-container px-2 py-1 rounded text-[10px] font-bold">TOP 5%</span>
</div>
<h3 className="text-5xl font-extrabold text-primary mt-4">98.2</h3>
</div>
<div className="w-full bg-outline-variant/20 h-2 rounded-full overflow-hidden">
<div className="bg-secondary h-full w-[98%] rounded-full"></div>
</div>
<p className="text-xs text-on-surface-variant font-medium">Collective likes, shares, and commentary</p>
</div>

<div className="bg-primary text-on-primary p-8 rounded-3xl h-[240px] flex flex-col justify-between shadow-xl">
<span className="label-md uppercase tracking-widest text-[10px] font-bold text-on-primary-container">Trending Achievement</span>
<div>
<h3 className="text-xl font-bold leading-tight mb-2">Rhodes Scholarship '24 Announcement</h3>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-fixed">workspace_premium</span>
<span className="text-sm font-medium opacity-80">14.2k Reads</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 flex flex-col gap-8">
<div className="bg-surface-container-low p-8 rounded-3xl">
<div className="flex justify-between items-center mb-10">
<div>
<h3 className="text-xl font-extrabold text-primary">Engagement Over Time</h3>
<p className="text-sm text-on-surface-variant">Daily interaction metrics across all portals</p>
</div>
<div className="flex gap-2">
<button className="px-3 py-1 bg-surface-container-highest rounded text-xs font-bold">Line</button>
<button className="px-3 py-1 text-xs font-bold opacity-40">Bar</button>
</div>
</div>

<div className="h-64 flex items-end gap-2 px-2">
<div className="flex-1 bg-primary/10 rounded-t h-[40%] transition-all hover:bg-primary/20"></div>
<div className="flex-1 bg-primary/10 rounded-t h-[55%] transition-all hover:bg-primary/20"></div>
<div className="flex-1 bg-primary/10 rounded-t h-[45%] transition-all hover:bg-primary/20"></div>
<div className="flex-1 bg-primary/10 rounded-t h-[70%] transition-all hover:bg-primary/20"></div>
<div className="flex-1 bg-primary/10 rounded-t h-[60%] transition-all hover:bg-primary/20"></div>
<div className="flex-1 bg-primary/10 rounded-t h-[85%] transition-all hover:bg-primary/20"></div>
<div className="flex-1 bg-primary/10 rounded-t h-[75%] transition-all hover:bg-primary/20"></div>
<div className="flex-1 bg-primary/10 rounded-t h-[95%] transition-all hover:bg-primary/20"></div>
<div className="flex-1 bg-primary/20 rounded-t h-[80%] transition-all hover:bg-primary/30"></div>
<div className="flex-1 bg-primary/10 rounded-t h-[65%] transition-all hover:bg-primary/20"></div>
<div className="flex-1 bg-primary/10 rounded-t h-[50%] transition-all hover:bg-primary/20"></div>
<div className="flex-1 bg-primary/30 rounded-t h-[90%] transition-all hover:bg-primary/40 relative">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary text-on-primary text-[10px] px-2 py-1 rounded">Peak</div>
</div>
</div>
<div className="flex justify-between mt-4 px-2 text-[10px] uppercase font-bold tracking-widest text-slate-400">
<span>Mon</span>
<span>Tue</span>
<span>Wed</span>
<span>Thu</span>
<span>Fri</span>
<span>Sat</span>
<span>Sun</span>
</div>
</div>

<div className="bg-surface-container-low rounded-3xl overflow-hidden">
<div className="p-8 pb-4 flex justify-between items-center">
<h3 className="text-xl font-extrabold text-primary">Recent Publications</h3>
<button className="text-sm font-bold text-surface-tint hover:underline">View All</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
<th className="px-8 py-4">Title</th>
<th className="px-8 py-4">Author</th>
<th className="px-8 py-4">Date</th>
<th className="px-8 py-4">Status</th>
<th className="px-8 py-4">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-100/50 transition-colors group">
<td className="px-8 py-5">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
<span className="material-symbols-outlined text-sm">school</span>
</div>
<span className="font-bold text-sm text-primary">Global Research Grant Recipients</span>
</div>
</td>
<td className="px-8 py-5 text-sm font-medium text-on-surface-variant">Dr. Aris Thorne</td>
<td className="px-8 py-5 text-sm text-slate-500">Oct 28, 2023</td>
<td className="px-8 py-5">
<span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-bold uppercase tracking-tight">Live</span>
</td>
<td className="px-8 py-5">
<button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-sm">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-slate-100/50 transition-colors group">
<td className="px-8 py-5">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
<span className="material-symbols-outlined text-sm">history_edu</span>
</div>
<span className="font-bold text-sm text-primary">Annual Gala Guest List</span>
</div>
</td>
<td className="px-8 py-5 text-sm font-medium text-on-surface-variant">Admin Team</td>
<td className="px-8 py-5 text-sm text-slate-500">Oct 27, 2023</td>
<td className="px-8 py-5">
<span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-[10px] font-bold uppercase tracking-tight">Draft</span>
</td>
<td className="px-8 py-5">
<button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-sm">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-slate-100/50 transition-colors group">
<td className="px-8 py-5">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
<span className="material-symbols-outlined text-sm">science</span>
</div>
<span className="font-bold text-sm text-primary">The Quantum Thesis Review</span>
</div>
</td>
<td className="px-8 py-5 text-sm font-medium text-on-surface-variant">Prof. Elena H.</td>
<td className="px-8 py-5 text-sm text-slate-500">Oct 25, 2023</td>
<td className="px-8 py-5">
<span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] font-bold uppercase tracking-tight">Pending</span>
</td>
<td className="px-8 py-5">
<button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-sm">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="flex flex-col gap-8">

<div className="bg-secondary-container rounded-3xl p-8 relative overflow-hidden group">
<div className="relative z-10">
<span className="text-[10px] font-extrabold uppercase tracking-widest text-on-secondary-fixed-variant">System Status</span>
<h3 className="text-2xl font-black text-on-secondary-fixed mt-2 mb-6">Server Infrastructure Robust</h3>
<div className="flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="Staff 1" className="w-8 h-8 rounded-full border-2 border-secondary-container" data-alt="Close up of smiling young male professional with dark hair" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8k1RobFYfRz4pjLx_3fXFn3cMeG1VsAMY0WIpYjh9nkNIJXW9bQa3YwRQot--G_I2gOGbvMVuveX5gKGT_C76Wc6LdW7lWIuJ_jQz410xyG6q7Ztb_4C4DuPJQh2guNlrincOjJcvZbMIqHVVJih2gjFpJgkI3FDDI7cqnPVBX1JXcwjiIyZiZSjWqoFqENjO1ts4jRTeWtzKSh03-Lv_rjWyHkO11wlBwjA6zOz8kHO-_5BmRcXbg0iNTBR9sYDfLG9iPm5WmpE"/>
<img alt="Staff 2" className="w-8 h-8 rounded-full border-2 border-secondary-container" data-alt="Portrait of a woman with curly hair and professional eyewear" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGVz33QiSrz7aLxxYqrclS7N0vGm_a1FHNsSaD7VChlxzlshPqTQki5E0650rqfZc2pyThcTTw8CGTLIMnFD95i-wD7wl-KHV25QVoluXGJ5U2YYahtgYmgBX56jU5uXIizOHjtP_TZvcObXRXFGR7JOhftV27h-qvfvu29LcnFoy2aCkl6Ju3I6liefR3PqbyuUUDJ8Uug-ofh7tCIKVQfz2IhHe-8xpGPYpem6UXPTxB7D_8B-Kl_IgamzTcVbCRQWyghVxgX1g"/>
<div className="w-8 h-8 rounded-full border-2 border-secondary-container bg-primary text-white text-[10px] flex items-center justify-center font-bold">+12</div>
</div>
<span className="text-xs font-bold text-on-secondary-fixed-variant">Active Moderators</span>
</div>
</div>
<div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
<span className="material-symbols-outlined text-[120px]">hub</span>
</div>
</div>

<div className="bg-surface-container-low p-8 rounded-3xl">
<h3 className="text-lg font-extrabold text-primary mb-6">Action Items</h3>
<ul className="space-y-4">
<li className="flex items-center gap-4 p-4 bg-white/50 rounded-xl border border-transparent hover:border-outline-variant transition-all cursor-pointer">
<div className="w-2 h-2 rounded-full bg-error"></div>
<div className="flex-grow">
<p className="text-sm font-bold text-primary">Review Staff Permits</p>
<p className="text-[10px] text-slate-400">Due in 2 hours</p>
</div>
<span className="material-symbols-outlined text-sm text-slate-400">arrow_forward_ios</span>
</li>
<li className="flex items-center gap-4 p-4 bg-white/50 rounded-xl border border-transparent hover:border-outline-variant transition-all cursor-pointer">
<div className="w-2 h-2 rounded-full bg-tertiary"></div>
<div className="flex-grow">
<p className="text-sm font-bold text-primary">Approve New Bio-Lab Category</p>
<p className="text-[10px] text-slate-400">Awaiting dean approval</p>
</div>
<span className="material-symbols-outlined text-sm text-slate-400">arrow_forward_ios</span>
</li>
<li className="flex items-center gap-4 p-4 bg-white/50 rounded-xl border border-transparent hover:border-outline-variant transition-all cursor-pointer">
<div className="w-2 h-2 rounded-full bg-secondary"></div>
<div className="flex-grow">
<p className="text-sm font-bold text-primary">Monthly Newsletter Draft</p>
<p className="text-[10px] text-slate-400">In Progress</p>
</div>
<span className="material-symbols-outlined text-sm text-slate-400">arrow_forward_ios</span>
</li>
</ul>
</div>

<div className="bg-surface-container-highest rounded-3xl overflow-hidden h-[300px] relative">
<img alt="Campus Map" className="w-full h-full object-cover" data-alt="Modern architectural blueprint or minimalist map of a university campus with clean lines and navy color scheme" data-location="Academic Heights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzymv1IHGZBkpsQaalB7uafpD01zuC3o38KLPm5Gtcq5PQ3Osb6VhSnzGBqjB9Qd8RKE6TOlX9_zA2rJCV-PW8WEBkWUhcbUcso3XeZBvkXmCuBWeZeYTeiwVe5_R7zbFCYA1ptvPXAQO-n9U8GaMvFeWS1WzuCZbpB6ZxikOt6TuOPfQ7CCBxwD1BZVjDhsrQHKovKpUzl1oZARjcrb2lyaDCCNuFB3W1jITCFg1gz1yDQ_Er4qMRAQ0BJEHtsxSC9C5hGxDD48s"/>
<div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]"></div>
<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg">
<h4 className="text-sm font-black text-primary uppercase tracking-tighter">Main Campus Hub</h4>
<div className="flex items-center gap-2 mt-1">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-[10px] font-bold text-slate-600">82% Capacity • 14:02 PM</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

        </div>
            );
}