import React from 'react';
import { portfolioData, Beat } from '../data/portfolio';

export const Story: React.FC = () => {
  return (
    <section className="wrap" id="story">
      <div className="head rv">
        <h2 className="bill">{portfolioData.story.heading}</h2>
        <span className="label">{portfolioData.story.label}</span>
      </div>

      <ol className="beats">
        {portfolioData.story.beats.map((beat: Beat, idx: number) => {
          const isHalo = !!beat.shot?.halo;

          return (
            <li key={idx} className={`beat2 rv ${isHalo ? 'halo' : ''}`}>
              <div className="beat-head">
                <span className="label when">{beat.when}</span>

                <span className="mark">
                  {beat.logoImg ? (
                    <img src={beat.logoImg} alt="" />
                  ) : (
                    <span className="mono">{beat.logoText || 'BL'}</span>
                  )}
                </span>

                <h3 className="who">
                  <span className="org">{beat.org}</span>
                  <span className="role">{beat.role}</span>
                </h3>
              </div>

              <div className="beat-body">
                <div className={`beat-grid ${beat.shot ? 'with-shot' : ''}`}>
                  <div className="beat-text">
                    <p>{beat.body}</p>

                    {beat.links && beat.links.length > 0 && (
                      <div className="beat-links">
                        {beat.links.map((link, lIdx) => (
                          <a key={lIdx} className="label" href={link.href}>
                            {link.label}{' '}
                            <span className="arr" aria-hidden="true">
                              →
                            </span>
                          </a>
                        ))}
                      </div>
                    )}

                    {beat.ctas && beat.ctas.length > 0 && (
                      <div className="ctas">
                        {beat.ctas.map((cta, cIdx) => (
                          <a key={cIdx} className="cta label" href={cta.href}>
                            {cta.label}
                            <svg
                              className="ext"
                              viewBox="0 0 16 16"
                              width="14"
                              height="14"
                              aria-hidden="true"
                            >
                              <path
                                d="M6 3h7v7M13 3 4 12"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.6"
                              />
                            </svg>
                            <span className="sr"> (opens in a new tab)</span>
                          </a>
                        ))}
                      </div>
                    )}

                    {beat.crafts && beat.crafts.length > 0 && (
                      <div className="credits label">
                        {beat.crafts.map((cr, crIdx) => (
                          <span key={crIdx}>{cr}</span>
                        ))}
                      </div>
                    )}
                  </div>

                  {beat.shot && (
                    <figure
                      className={`beat-shot ${isHalo ? 'halo-shot' : ''}`}
                    >
                      <img
                        src={beat.shot.src}
                        alt={beat.shot.alt}
                        loading="lazy"
                      />
                      <figcaption className="label">
                        {beat.shot.caption}
                      </figcaption>
                    </figure>
                  )}
                </div>

                {beat.posts && beat.posts.length > 0 && (
                  <div className="thumbs">
                    {beat.posts.map((post, pIdx) => (
                      <a
                        key={pIdx}
                        className="thumb post"
                        href={post.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="shot post-shot">
                          {post.img && (
                            <img src={post.img} alt="" loading="lazy" />
                          )}
                          <span className="post-chip label">
                            {post.platform}
                          </span>
                          <span className="post-title">{post.title}</span>
                          <span className="play" aria-hidden="true" />
                        </span>
                        <span className="label note">
                          {post.note}
                          <svg
                            className="ext"
                            viewBox="0 0 16 16"
                            width="14"
                            height="14"
                            aria-hidden="true"
                          >
                            <path
                              d="M6 3h7v7M13 3 4 12"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.6"
                            />
                          </svg>
                          <span className="sr"> (opens in a new tab)</span>
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
};
