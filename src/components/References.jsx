'use client';
import React, { useState, useEffect, Fragment } from 'react';

export default function References({ children }) {
    const [references, setReferences] = useState([]);

    useEffect(() => {
        const searchWords = {
            sgi: 'sgi',
            'account selection': 'account-selection',
            dashboard: 'dashboard',
            sidebar: 'sidebar',
            'games list': 'games-list',
            'game card': 'game-card',
            'game card menu': 'game-card-menu',
            'favorites list': 'favorites-list',
            'card farming list': 'card-farming-list',
            'achievement unlocker list': 'achievement-unlocker-list',
            'auto idle list': 'auto-idle-list',
            'idle windows': 'idle-windows-steamutilityexe',
            'steamutility.exe': 'idle-windows-steamutilityexe',
            'dropdown sort menu': 'dropdown-sort-menu',
        };
        const foundRefs = [];

        const extractText = (child) => {
            if (typeof child === 'string') return child;
            if (React.isValidElement(child)) {
                return React.Children.toArray(child.props.children)
                    .map(extractText)
                    .join(' ');
            }
            return '';
        };

        const searchText = React.Children.toArray(children)
            .map(extractText)
            .join(' ');

        Object.keys(searchWords).forEach((word) => {
            if (searchText.toLowerCase().includes(word.toLowerCase())) {
                foundRefs.push({ word, href: searchWords[word] });
            }
        });

        if (foundRefs.length > 0) {
            setReferences(['References', ...foundRefs]);
        }
    }, [children]);

    return (
        <Fragment>
            {children}

            {references.length > 0 && (
                <Fragment>
                    <h2 className="x:tracking-tight x:text-slate-900 x:dark:text-slate-100 x:font-semibold x:target:animate-[fade-in_1.5s] x:mt-10 x:border-b x:pb-1 x:text-3xl nextra-border">
                        {references[0]}
                    </h2>
                    <ul className="x:[:is(ol,ul)_&]:my-3 x:not-first:mt-6 x:list-disc x:ms-6">
                        {references.slice(1).map((ref, index) => (
                            <li key={index} className="x:my-2">
                                <a
                                    className="x:focus-visible:nextra-focus x:text-primary-600 x:underline x:hover:no-underline x:decoration-from-font x:[text-underline-position:from-font]"
                                    href={`/references#${ref.href}`}
                                >
                                    {ref.word}
                                </a>
                            </li>
                        ))}
                    </ul>
                </Fragment>
            )}
        </Fragment>
    );
}
