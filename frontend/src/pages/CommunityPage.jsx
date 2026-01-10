import React, { useState } from 'react';
import { 
  MessageSquare, 
  ArrowBigUp, 
  ArrowBigDown, 
  Search, 
  Plus, 
  Cpu, 
  Hash, 
  MoreHorizontal, 
  Share2, 
  Flag, 
  MessageCircle,
  ChevronLeft,
  Filter,
  Clock,
  TrendingUp,
  User,
  X
} from 'lucide-react';

// --- MOCK DATA ---
const INITIAL_POSTS = [
  {
    id: 1,
    title: "How do I optimize large arrays in Python?",
    body: "I'm working on a data processing script that handles arrays with ~1M items. Standard loops are too slow. Should I use NumPy or is there a native way?",
    author: "py_wizard",
    timestamp: "2 hours ago",
    tags: ["python", "performance", "arrays"],
    votes: 42,
    comments: [
      { id: 101, author: "data_guru", body: "Definitely use NumPy. It's built for this.", votes: 15, timestamp: "1 hour ago" },
      { id: 102, author: "speed_demon", body: "List comprehensions are faster than for loops, but NumPy wins for math operations.", votes: 8, timestamp: "45 mins ago" }
    ]
  },
  {
    id: 2,
    title: "Centering a div: Flexbox vs Grid?",
    body: "I know this is a meme, but what is the actual industry standard for centering a modal in 2024? Flexbox feels easier but Grid seems more robust.",
    author: "css_fan",
    timestamp: "4 hours ago",
    tags: ["css", "frontend", "ui"],
    votes: 128,
    comments: [
      { id: 201, author: "flex_master", body: "display: grid; place-items: center; -> Done.", votes: 50, timestamp: "3 hours ago" }
    ]
  },
  {
    id: 3,
    title: "Understanding React useEffect dependency array",
    body: "My effect is running twice on mount even with an empty dependency array. I am using Strict Mode. Is this normal?",
    author: "react_newbie",
    timestamp: "1 day ago",
    tags: ["javascript", "react", "hooks"],
    votes: 15,
    comments: []
  }
];

// --- COMPONENTS ---

const VoteControl = ({ votes, size = "md" }) => {
  const [currentVote, setCurrentVote] = useState(0); // 0, 1, -1
  const displayVotes = votes + currentVote;

  return (
    <div className={`flex flex-col items-center gap-1 ${size === "sm" ? "mr-4" : "mr-6"}`}>
      <button 
        onClick={(e) => { e.stopPropagation(); setCurrentVote(currentVote === 1 ? 0 : 1); }}
        className={`p-1 rounded hover:bg-zinc-800 transition-colors ${currentVote === 1 ? "text-orange-500" : "text-zinc-500"}`}
      >
        <ArrowBigUp size={size === "sm" ? 24 : 32} fill={currentVote === 1 ? "currentColor" : "none"} />
      </button>
      
      <span className={`font-bold ${size === "sm" ? "text-sm" : "text-lg"} ${currentVote === 1 ? "text-orange-500" : currentVote === -1 ? "text-violet-500" : "text-zinc-300"}`}>
        {displayVotes}
      </span>
      
      <button 
        onClick={(e) => { e.stopPropagation(); setCurrentVote(currentVote === -1 ? 0 : -1); }}
        className={`p-1 rounded hover:bg-zinc-800 transition-colors ${currentVote === -1 ? "text-violet-500" : "text-zinc-500"}`}
      >
        <ArrowBigDown size={size === "sm" ? 24 : 32} fill={currentVote === -1 ? "currentColor" : "none"} />
      </button>
    </div>
  );
};

const Tag = ({ label }) => (
  <span className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-400 text-xs font-medium border border-zinc-700 hover:bg-zinc-700 hover:text-zinc-200 transition-colors cursor-pointer">
    #{label}
  </span>
);

const PostCard = ({ post, onClick }) => (
  <div 
    onClick={onClick}
    className="flex p-4 border border-zinc-800 bg-[#09090b] hover:border-zinc-600 transition-all cursor-pointer group first:rounded-t-lg last:rounded-b-lg border-b-0 last:border-b"
  >
    <VoteControl votes={post.votes} size="sm" />
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2 mb-1.5">
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <span className="font-medium text-zinc-300 hover:underline">{post.author}</span>
          <span>•</span>
          <span>{post.timestamp}</span>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-zinc-100 mb-2 group-hover:text-blue-400 transition-colors leading-tight">
        {post.title}
      </h3>
      <p className="text-zinc-400 text-sm line-clamp-2 mb-3">
        {post.body}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {post.tags.map(tag => <Tag key={tag} label={tag} />)}
        </div>
        <div className="flex items-center gap-4 text-xs text-zinc-500 font-medium">
          <span className="flex items-center gap-1.5 hover:bg-zinc-800 px-2 py-1 rounded transition-colors">
            <MessageSquare size={14} />
            {post.comments.length} comments
          </span>
          <span className="flex items-center gap-1.5 hover:bg-zinc-800 px-2 py-1 rounded transition-colors">
            <Share2 size={14} />
            Share
          </span>
        </div>
      </div>
    </div>
  </div>
);

const Comment = ({ comment }) => (
  <div className="flex gap-3 p-4 border-b border-zinc-800/50 hover:bg-zinc-900/30 transition-colors">
    <div className="flex flex-col items-center gap-1 pt-1">
       <button className="text-zinc-500 hover:text-orange-500"><ArrowBigUp size={20} /></button>
       <button className="text-zinc-500 hover:text-violet-500"><ArrowBigDown size={20} /></button>
    </div>
    <div className="flex-1">
      <div className="flex items-center gap-2 text-xs text-zinc-500 mb-1">
        <span className="font-bold text-zinc-300">{comment.author}</span>
        <span>{comment.votes} points</span>
        <span>•</span>
        <span>{comment.timestamp}</span>
      </div>
      <div className="text-sm text-zinc-300 leading-relaxed">
        {comment.body}
      </div>
      <div className="mt-2 flex gap-3 text-xs font-semibold text-zinc-500">
        <button className="hover:text-zinc-300">Reply</button>
        <button className="hover:text-zinc-300">Share</button>
      </div>
    </div>
  </div>
);

// --- MAIN PAGE ---

export default function CommunityPage() {
  const [view, setView] = useState('feed'); // 'feed' | 'post' | 'create'
  const [activePost, setActivePost] = useState(null);
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [searchQuery, setSearchQuery] = useState('');

  // Creation State
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostBody, setNewPostBody] = useState('');
  const [newPostTags, setNewPostTags] = useState('');

  // Comment State
  const [commentText, setCommentText] = useState('');

  const handlePostClick = (post) => {
    setActivePost(post);
    setView('post');
    setCommentText('');
  };

  const handleCreatePost = () => {
    if (!newPostTitle.trim() || !newPostBody.trim()) return;

    const newPost = {
      id: Date.now(),
      title: newPostTitle,
      body: newPostBody,
      author: "current_user",
      timestamp: "Just now",
      tags: newPostTags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0),
      votes: 0,
      comments: []
    };

    setPosts([newPost, ...posts]);
    setNewPostTitle('');
    setNewPostBody('');
    setNewPostTags('');
    setView('feed');
  };

  const handlePostComment = () => {
    if (!commentText.trim() || !activePost) return;

    const newComment = {
      id: Date.now(),
      author: "current_user",
      body: commentText,
      votes: 0,
      timestamp: "Just now"
    };

    const updatedPosts = posts.map(p => {
      if (p.id === activePost.id) {
        return { ...p, comments: [...p.comments, newComment] };
      }
      return p;
    });

    setPosts(updatedPosts);
    setActivePost({
      ...activePost,
      comments: [...activePost.comments, newComment]
    });
    setCommentText('');
  };

  const filteredPosts = posts.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="flex h-screen w-full bg-black text-zinc-300 font-sans selection:bg-violet-900 selection:text-white overflow-hidden">
      
      {/* SIDEBAR NAVIGATION */}
      <div className="w-64 border-r border-zinc-800 bg-[#09090b] flex flex-col hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-zinc-800">
          <button 
            onClick={() => window.location.href = '/'}
            className="flex items-center gap-2 font-bold text-lg text-zinc-100 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-mono text-lg font-bold leading-none pt-1">&gt;_</span>
            </div>
            <span>.repl</span>
          </button>
        </div>

        <div className="flex-1 py-6 px-3 space-y-6 overflow-y-auto">
          <div className="space-y-1">
            <button 
              onClick={() => { setView('feed'); setActivePost(null); setSearchQuery(''); }}
              className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors ${view === 'feed' || view === 'post' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200'}`}
            >
              <Hash size={18} />
              Feed
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200 rounded-md transition-colors">
              <TrendingUp size={18} />
              Popular
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200 rounded-md transition-colors">
              <Clock size={18} />
              Recent
            </button>
          </div>

          <div>
            <h3 className="px-3 text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">My Community</h3>
            <div className="space-y-1">
              <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200 rounded-md transition-colors">
                <User size={18} />
                Profile
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200 rounded-md transition-colors">
                <MessageCircle size={18} />
                My Discussions
              </button>
            </div>
          </div>

          <div>
            <h3 className="px-3 text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Popular Tags</h3>
            <div className="flex flex-wrap gap-2 px-3">
              {['javascript', 'python', 'rust', 'react', 'css', 'ai'].map(t => (
                <span key={t} className="text-xs text-zinc-500 hover:text-violet-400 cursor-pointer transition-colors">#{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0 bg-black">
        
        {/* HEADER */}
        <div className="h-16 border-b border-zinc-800 bg-[#09090b]/80 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between px-6">
          <div className="flex-1 flex items-center">
            {view === 'post' || view === 'create' ? (
              <button 
                onClick={() => setView('feed')} 
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
              >
                <ChevronLeft size={16} />
                Back to Feed
              </button>
            ) : (
              <div className="relative w-full max-w-md">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                <input 
                  type="text" 
                  placeholder="Search discussions..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 text-zinc-200 text-sm rounded-full pl-10 pr-4 py-2 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-zinc-600"
                />
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
              <button className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-colors">
                <Filter size={18} />
              </button>
              <button 
                onClick={() => setView('create')}
                className="flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold rounded-full transition-all shadow-lg shadow-violet-500/20 active:scale-95"
              >
                <Plus size={16} />
                Ask Question
              </button>
          </div>
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
            
            {view === 'create' && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-zinc-100">Ask a Public Question</h2>
                  <button onClick={() => setView('feed')} className="text-zinc-500 hover:text-white">
                    <X size={24} />
                  </button>
                </div>
                
                <div className="bg-[#09090b] border border-zinc-800 rounded-lg p-6 space-y-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-zinc-300">Title</label>
                    <p className="text-xs text-zinc-500">Be specific and imagine you're asking a question to another person.</p>
                    <input 
                      value={newPostTitle}
                      onChange={(e) => setNewPostTitle(e.target.value)}
                      className="w-full bg-black border border-zinc-800 rounded-md p-3 text-zinc-200 focus:outline-none focus:border-violet-500 transition-colors"
                      placeholder="e.g. How do I filter an array in JavaScript?"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-zinc-300">Body</label>
                    <p className="text-xs text-zinc-500">Include all the information someone would need to answer your question.</p>
                    <textarea 
                      value={newPostBody}
                      onChange={(e) => setNewPostBody(e.target.value)}
                      className="w-full bg-black border border-zinc-800 rounded-md p-3 text-zinc-200 focus:outline-none focus:border-violet-500 min-h-[200px] font-mono text-sm"
                      placeholder="Describe your problem details and include any code..."
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-zinc-300">Tags</label>
                    <p className="text-xs text-zinc-500">Add up to 5 tags to describe what your question is about (comma separated).</p>
                    <input 
                      value={newPostTags}
                      onChange={(e) => setNewPostTags(e.target.value)}
                      className="w-full bg-black border border-zinc-800 rounded-md p-3 text-zinc-200 focus:outline-none focus:border-violet-500 transition-colors"
                      placeholder="e.g. javascript, react, arrays"
                    />
                  </div>

                  <div className="flex justify-end gap-3 pt-4 border-t border-zinc-800">
                    <button 
                      onClick={() => setView('feed')}
                      className="px-4 py-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-md transition-colors"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={handleCreatePost}
                      className="px-6 py-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-md transition-colors"
                    >
                      Post Question
                    </button>
                  </div>
                </div>
              </div>
            )}

            {view === 'feed' && (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="flex items-center justify-between mb-2 px-2">
                  <h2 className="text-xl font-bold text-zinc-100">Top Questions</h2>
                  <div className="flex bg-zinc-900 rounded-lg p-1 border border-zinc-800">
                    <button className="px-3 py-1 text-xs font-medium bg-zinc-700 text-white rounded shadow-sm">Interesting</button>
                    <button className="px-3 py-1 text-xs font-medium text-zinc-500 hover:text-zinc-300">Hot</button>
                    <button className="px-3 py-1 text-xs font-medium text-zinc-500 hover:text-zinc-300">Week</button>
                  </div>
                </div>
                
                <div className="flex flex-col rounded-lg overflow-hidden border border-zinc-800">
                  {filteredPosts.map(post => (
                    <PostCard 
                      key={post.id} 
                      post={post} 
                      onClick={() => handlePostClick(post)} 
                    />
                  ))}
                  {filteredPosts.length === 0 && (
                    <div className="p-12 text-center text-zinc-500">
                      No posts found matching your search.
                    </div>
                  )}
                </div>
              </div>
            )}

            {view === 'post' && activePost && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                {/* Main Post Header */}
                <div className="flex gap-4 mb-6">
                  <VoteControl votes={activePost.votes} />
                  <div className="flex-1">
                    <h1 className="text-2xl font-bold text-zinc-100 mb-4 leading-snug">{activePost.title}</h1>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {activePost.tags.map(tag => <Tag key={tag} label={tag} />)}
                    </div>
                    <div className="prose prose-invert max-w-none text-zinc-300 mb-8 p-6 bg-[#09090b] border border-zinc-800 rounded-lg whitespace-pre-wrap">
                      {activePost.body}
                    </div>
                    
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center text-xs font-bold text-zinc-400">
                          {activePost.author.substring(0,2).toUpperCase()}
                        </div>
                        <div className="text-xs">
                          <span className="block text-blue-400 font-medium">@{activePost.author}</span>
                          <span className="block text-zinc-500">Posted {activePost.timestamp}</span>
                        </div>
                      </div>
                      <div className="flex gap-4 text-xs font-medium text-zinc-500">
                        <button className="hover:text-zinc-300">Share</button>
                        <button className="hover:text-zinc-300">Edit</button>
                        <button className="hover:text-zinc-300">Report</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comments Section */}
                <div className="ml-12 md:ml-16">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-zinc-200">
                      {activePost.comments.length} Answers
                    </h3>
                    <div className="text-xs text-zinc-500 flex gap-2">
                      <span className="text-zinc-300 font-medium">Sorted by:</span>
                      <span className="cursor-pointer hover:underline">Highest score</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {activePost.comments.map(comment => (
                      <Comment key={comment.id} comment={comment} />
                    ))}
                    {activePost.comments.length === 0 && (
                      <div className="p-8 border border-dashed border-zinc-800 rounded-lg text-center text-zinc-500 text-sm">
                        No answers yet. Be the first to help!
                      </div>
                    )}
                  </div>

                  {/* Comment Input */}
                  <div className="bg-[#09090b] border border-zinc-800 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-zinc-300 mb-3">Your Answer</h4>
                    <textarea 
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      className="w-full bg-black border border-zinc-800 rounded-md p-3 text-sm text-zinc-200 focus:outline-none focus:border-violet-500 min-h-[120px] mb-3 placeholder:text-zinc-700"
                      placeholder="Type your solution here..."
                    />
                    <div className="flex justify-end">
                      <button 
                        onClick={handlePostComment}
                        className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold rounded-md transition-colors"
                      >
                        Post Answer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}