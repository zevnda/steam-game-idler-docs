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
            setReferences(foundRefs);
        }
    }, [children]);

    useEffect(() => {
        const referencesHeader = document.querySelector('h2#references');
        if (referencesHeader && references.length > 0) {
            const ul = document.createElement('ul');
            ul.className = "x:[:is(ol,ul)_&]:my-3 x:not-first:mt-6 x:list-disc x:ms-6";
            references.forEach((ref, index) => {
                const li = document.createElement('li');
                li.className = "x:my-2";
                const a = document.createElement('a');
                a.className = "x:focus-visible:nextra-focus x:text-primary-600 x:underline x:hover:no-underline x:decoration-from-font x:[text-underline-position:from-font]";
                a.href = `/references#${ref.href}`;
                a.textContent = ref.word;
                li.appendChild(a);
                ul.appendChild(li);
            });
            referencesHeader.insertAdjacentElement('afterend', ul);
        }
    }, [references]);

    return (
        <Fragment>
            {children}
        </Fragment>
    );
}