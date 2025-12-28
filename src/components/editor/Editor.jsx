import React, { useState, useRef, useEffect } from 'react';
import './editor.css';
import { FaFileCode, FaFolder, FaFolderOpen, FaTimes, FaCode, FaUser, FaBriefcase, FaProjectDiagram, FaTrophy, FaBlog, FaUsers, FaLinkedin, FaGithub, FaGitAlt, FaBug, FaCircle, FaChevronDown, FaChevronRight, FaPlay, FaStop, FaSpinner, FaBell, FaCog, FaSync } from 'react-icons/fa';
import { IoMdGitBranch } from 'react-icons/io';
import Header from '../header/Header';
import About from '../about/About';
import Experience from '../experience/Experience';
import Portfolio from '../portfolio/Portfolio';
import Skills from '../skills/Skills';
import Achievements from '../achievements/Achievements';
import Blogs from '../blogs/blog';
import Position from '../positions/position';
import VSCodePet from './VSCodePet';
import { fetchGitHubProfile, fetchGitHubRepos, fetchGitHubContributions } from '../../services/githubApi';

const Editor = () => {
  const [openTabs, setOpenTabs] = useState(['home.tsx']);
  const [activeTab, setActiveTab] = useState('home.tsx');
  const [expandedFolders, setExpandedFolders] = useState(['portfolio', 'src', 'components']);
  const [modifiedFiles, setModifiedFiles] = useState(['about.tsx', 'experience.tsx']);
  const [activeActivity, setActiveActivity] = useState('explorer');
  const [githubData, setGithubData] = useState({ profile: null, repos: [], contributions: 0, loading: false });
  const contentRef = useRef(null);
  const [lineCount, setLineCount] = useState(50);
  
  const getFileExtension = (fileName) => {
    return fileName.split('.').pop();
  };

  useEffect(() => {
    const loadGitHubData = async () => {
      setGithubData(prev => ({ ...prev, loading: true }));
      const [profile, repos, contributions] = await Promise.all([
        fetchGitHubProfile(),
        fetchGitHubRepos(),
        fetchGitHubContributions()
      ]);
      setGithubData({
        profile,
        repos: repos || [],
        contributions: contributions || 0,
        loading: false
      });
    };

    if (activeActivity === 'github') {
      loadGitHubData();
    }
  }, [activeActivity]);

  useEffect(() => {
    const updateLineCount = () => {
      if (contentRef.current) {
        const codeContent = contentRef.current.querySelector('.code-content');
        if (codeContent) {
          const height = codeContent.scrollHeight;
          const lineHeight = 24;
          const calculatedLines = Math.ceil(height / lineHeight);
          setLineCount(Math.max(1, calculatedLines));
        }
      }
    };
    
    const timeoutId = setTimeout(updateLineCount, 200);
    
    const observer = new MutationObserver(() => {
      setTimeout(updateLineCount, 100);
    });
    
    if (contentRef.current) {
      observer.observe(contentRef.current, { 
        childList: true, 
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class']
      });
    }
    
    window.addEventListener('resize', updateLineCount);
    
    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
      window.removeEventListener('resize', updateLineCount);
    };
  }, [activeTab]);

  const fileStructure = {
    'portfolio': {
      type: 'folder',
      icon: <FaFolder />,
      children: {
        'src': {
          type: 'folder',
          icon: <FaFolder />,
          children: {
            'components': {
              type: 'folder',
              icon: <FaFolder />,
              children: {
                'home.tsx': { type: 'file', icon: <FaFileCode />, component: 'home', extension: 'tsx' },
                'about.html': { type: 'file', icon: <FaFileCode />, component: 'about', extension: 'html' },
                'experience.js': { type: 'file', icon: <FaFileCode />, component: 'experience', extension: 'js' },
                'projects.tsx': { type: 'file', icon: <FaFileCode />, component: 'projects', extension: 'tsx' },
                'skills.css': { type: 'file', icon: <FaFileCode />, component: 'skills', extension: 'css' },
                'achievements.json': { type: 'file', icon: <FaFileCode />, component: 'achievements', extension: 'json' },
                'positions.tsx': { type: 'file', icon: <FaFileCode />, component: 'positions', extension: 'tsx' },
                'blogs.md': { type: 'file', icon: <FaFileCode />, component: 'blogs', extension: 'md' },
              }
            }
          }
        }
      }
    }
  };

  const toggleFolder = (path) => {
    setExpandedFolders(prev => 
      prev.includes(path) 
        ? prev.filter(p => p !== path)
        : [...prev, path]
    );
  };

  const openFile = (fileName, component) => {
    if (!openTabs.includes(fileName)) {
      setOpenTabs([...openTabs, fileName]);
    }
    setActiveTab(fileName);
  };
  
  const getFileDisplayName = (fileName) => {
    return fileName;
  };

  const closeTab = (fileName, e) => {
    e.stopPropagation();
    const newTabs = openTabs.filter(tab => tab !== fileName);
    setOpenTabs(newTabs);
    if (activeTab === fileName) {
      setActiveTab(newTabs[newTabs.length - 1] || '');
    }
  };

  const renderFileTree = (structure, path = '') => {
    return Object.entries(structure).map(([name, item]) => {
      const fullPath = path ? `${path}/${name}` : name;
      const isExpanded = expandedFolders.includes(fullPath);
      
      if (item.type === 'folder') {
        return (
          <div key={fullPath} className="file-tree-item">
            <div 
              className="folder-item" 
              onClick={() => toggleFolder(fullPath)}
            >
              <span className="folder-icon">
                {isExpanded ? <FaChevronDown /> : <FaChevronRight />}
              </span>
              <span className="folder-icon-folder">
                {isExpanded ? <FaFolderOpen /> : <FaFolder />}
              </span>
              <span className="folder-name">{name}</span>
            </div>
            {isExpanded && item.children && (
              <div className="folder-children">
                {renderFileTree(item.children, fullPath)}
              </div>
            )}
          </div>
        );
      } else {
        const extension = item.extension || name.split('.').pop();
        return (
          <div 
            key={fullPath} 
            className={`file-item ${activeTab === name ? 'active' : ''} file-${extension}`}
            onClick={() => openFile(name, item.component)}
          >
            <span className="file-icon">{item.icon}</span>
            <span className="file-name">{name}</span>
          </div>
        );
      }
    });
  };

  const renderContent = () => {
    const baseName = activeTab.split('.')[0];
    switch (baseName) {
      case 'home':
        return <Header />;
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Portfolio />;
      case 'skills':
        return <Skills />;
      case 'achievements':
        return <Achievements />;
      case 'positions':
        return <Position />;
      case 'blogs':
        return <Blogs />;
      default:
        return <Header />;
    }
  };

  const isModified = (fileName) => modifiedFiles.includes(fileName);

  return (
    <div className="editor-container">
      <div className="activity-bar">
        <div 
          className={`activity-item ${activeActivity === 'explorer' ? 'active' : ''}`}
          onClick={() => setActiveActivity('explorer')}
          title="Explorer"
        >
          <FaFolder />
        </div>
        <div 
          className="activity-item"
          onClick={() => window.open('https://www.linkedin.com/in/agrima-jain-/', '_blank')}
          title="LinkedIn"
        >
          <FaLinkedin />
        </div>
        <div 
          className={`activity-item ${activeActivity === 'github' ? 'active' : ''}`}
          onClick={() => setActiveActivity('github')}
          title="GitHub"
        >
          <FaGithub />
        </div>
        <div 
          className={`activity-item ${activeActivity === 'git' ? 'active' : ''}`}
          onClick={() => setActiveActivity('git')}
          title="Source Control"
        >
          <FaGitAlt />
        </div>
        <div 
          className={`activity-item ${activeActivity === 'debug' ? 'active' : ''}`}
          onClick={() => setActiveActivity('debug')}
          title="Run and Debug"
        >
          <FaBug />
        </div>
      </div>

      {/* Sidebar */}
      {activeActivity === 'explorer' && (
        <div className="editor-sidebar">
          <div className="sidebar-header">
            <span className="sidebar-title">EXPLORER</span>
          </div>
          <div className="file-tree">
            {renderFileTree(fileStructure)}
          </div>
        </div>
      )}

      {activeActivity === 'github' && (
        <div className="editor-sidebar">
          <div className="sidebar-header">
            <span className="sidebar-title">GITHUB</span>
          </div>
          <div className="social-panel">
            {githubData.loading ? (
              <div className="loading-spinner">
                <FaSpinner className="spinner-icon" />
                <p>Loading GitHub data...</p>
              </div>
            ) : githubData.profile ? (
              <>
                <div className="social-profile">
                  <div className="social-avatar github">
                    {githubData.profile.avatar_url ? (
                      <img src={githubData.profile.avatar_url} alt={githubData.profile.login} />
                    ) : (
                      'GH'
                    )}
                  </div>
                  <div className="social-info">
                    <h3>@{githubData.profile.login}</h3>
                    <p>{githubData.profile.bio || 'Full Stack Developer'}</p>
                    <p className="social-location">🌐 {githubData.profile.location || 'Public Profile'}</p>
                  </div>
                </div>
                <div className="social-stats">
                  <div className="stat-item">
                    <span className="stat-number">{githubData.profile.public_repos}</span>
                    <span className="stat-label">Repositories</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">{githubData.profile.followers}</span>
                    <span className="stat-label">Followers</span>
                  </div>
                </div>
                <a 
                  href={githubData.profile.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link-btn github-btn"
                >
                  <FaGithub /> View Profile
                </a>
                <div className="social-recent">
                  <h4>Recent Repositories</h4>
                  {githubData.repos.length > 0 ? (
                    githubData.repos.slice(0, 5).map((repo, idx) => (
                      <div key={idx} className="repo-item" onClick={() => window.open(repo.url, '_blank')}>
                        <div className="repo-name">
                          <FaCode /> {repo.name}
                        </div>
                        <div className="repo-desc">{repo.description}</div>
                        <div className="repo-stats">
                          <span>⭐ {repo.stars}</span>
                          <span>🍴 {repo.forks}</span>
                          {repo.language && <span className="repo-lang">{repo.language}</span>}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="no-repos">No repositories found</div>
                  )}
                </div>
              </>
            ) : (
              <div className="error-message">
                <p>Unable to load GitHub data</p>
                <a 
                  href="https://github.com/ughrima" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link-btn github-btn"
                >
                  <FaGithub /> Visit Profile
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {activeActivity === 'git' && (
        <div className="editor-sidebar">
          <div className="sidebar-header">
            <span className="sidebar-title">SOURCE CONTROL</span>
          </div>
          <div className="git-panel">
            <div className="git-status">
              <IoMdGitBranch className="git-icon" />
              <span>main</span>
              <span className="git-branch-indicator">●</span>
            </div>
            <div className="git-changes">
              <div className="git-section">
                <div className="git-section-header">Changes ({modifiedFiles.length})</div>
                {modifiedFiles.map(file => (
                  <div key={file} className="git-file">
                    <FaCircle className="modified-dot" />
                    <span>{file}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="git-commit">
              <input type="text" placeholder="Message (Ctrl+Enter to commit)" className="git-commit-input" />
              <button className="git-commit-btn">Commit</button>
            </div>
          </div>
        </div>
      )}

      {activeActivity === 'debug' && (
        <div className="editor-sidebar">
          <div className="sidebar-header">
            <span className="sidebar-title">RUN AND DEBUG</span>
          </div>
          <div className="debug-panel">
            <div className="debug-configurations">
              <div className="debug-section-header">Configurations</div>
              <div className="debug-config">
                <div className="debug-config-header">
                  <FaBug className="debug-icon" />
                  <div className="debug-config-info">
                    <div className="debug-config-name">🚀 Launch Portfolio Dev</div>
                    <div className="debug-config-desc">Start development server on port 3000</div>
                  </div>
                </div>
                <div className="debug-config-meta">
                  <span className="debug-type">react</span>
                  <span className="debug-port">:3000</span>
                  <span className="debug-status ready">ready</span>
                </div>
              </div>
              <div className="debug-config">
                <div className="debug-config-header">
                  <FaBug className="debug-icon" />
                  <div className="debug-config-info">
                    <div className="debug-config-name">🐛 Debug Production Build</div>
                    <div className="debug-config-desc">Attach debugger to production build</div>
                  </div>
                </div>
                <div className="debug-config-meta">
                  <span className="debug-type">chrome</span>
                  <span className="debug-port">:8080</span>
                  <span className="debug-status ready">ready</span>
                </div>
              </div>
              <div className="debug-config">
                <div className="debug-config-header">
                  <FaBug className="debug-icon" />
                  <div className="debug-config-info">
                    <div className="debug-config-name">🧪 Run Test Suite</div>
                    <div className="debug-config-desc">Execute all unit and integration tests</div>
                  </div>
                </div>
                <div className="debug-config-meta">
                  <span className="debug-type">jest</span>
                  <span className="debug-status ready">ready</span>
                </div>
              </div>
            </div>
            <div className="debug-actions">
              <button className="debug-btn primary">
                <FaPlay /> Start Debugging
              </button>
              <button className="debug-btn">
                <FaStop /> Stop
              </button>
            </div>
            <div className="debug-console">
              <div className="debug-section-header">Debug Console</div>
              <div className="console-output">
                <div className="console-line">[INFO] Portfolio dev server ready</div>
                <div className="console-line">[INFO] Compiled successfully!</div>
                <div className="console-line">[DEBUG] Watching for file changes...</div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="editor-main">
        <div className="editor-tabs">
          {openTabs.map(tab => {
            const extension = getFileExtension(tab);
            return (
              <div 
                key={tab}
                className={`editor-tab ${activeTab === tab ? 'active' : ''} tab-${extension}`}
                onClick={() => setActiveTab(tab)}
              >
                <span className="tab-icon"><FaFileCode /></span>
                <span className="tab-name">{tab}</span>
                {isModified(tab) && (
                  <span className="tab-modified-indicator" title="Modified">
                    <FaCircle />
                  </span>
                )}
                <span 
                  className="tab-close"
                  onClick={(e) => closeTab(tab, e)}
                >
                  <FaTimes />
                </span>
              </div>
            );
          })}
        </div>

        <div className="editor-content" ref={contentRef}>
          <div className="code-editor">
            <div className="line-numbers">
              {Array.from({ length: lineCount }, (_, i) => (
                <div key={i} className="line-number">{i + 1}</div>
              ))}
            </div>
            <div 
              className="code-content" 
              id="code-content-wrapper"
              data-filename={activeTab.replace('.tsx', '')}
            >
              {renderContent()}
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="status-bar">
          <div className="status-left">
            <span className="status-item">
              <IoMdGitBranch />
              <span>main</span>
            </span>
            <span className="status-item">
              <FaBug />
              <span>0 Problems</span>
            </span>
          </div>
          <div className="status-right">
            <span className="status-item">Ln 1, Col 1</span>
            <span className="status-item">Spaces: 2</span>
            <span className="status-item">UTF-8</span>
            <span className="status-item">TypeScript React</span>
            <span className="status-icon">
              <FaSync />
            </span>
            <span className="status-icon">
              <FaBell />
            </span>
            <span className="status-icon">
              <FaUser />
            </span>
            <span className="status-icon">
              <FaCog />
            </span>
          </div>
        </div>
      </div>

      <VSCodePet />
    </div>
  );
};

export default Editor;

