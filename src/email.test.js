import { test } from 'node:test';
import assert from 'node:assert/strict';
import { extractEmails, isValidEmail, getValidEmails } from './email.js';

test('extractEmails returns email fields from users', () => {
    const users = [{ email: 'a@b.com' }, { email: 'c@d.com' }];
    assert.deepEqual(extractEmails(users), ['a@b.com', 'c@d.com']);
});

test('extractEmails returns empty array for non-array input', () => {
    assert.deepEqual(extractEmails(null), []);
    assert.deepEqual(extractEmails(undefined), []);
});

test('isValidEmail accepts valid emails', () => {
    assert.equal(isValidEmail('user@example.com'), true);
});

test('isValidEmail rejects invalid emails', () => {
    assert.equal(isValidEmail('not-an-email'), false);
    assert.equal(isValidEmail(''), false);
    assert.equal(isValidEmail(null), false);
});

test('getValidEmails returns only valid emails', () => {
    const users = [
        { email: 'good@example.com' },
        { email: 'bad-email' },
        { email: 'also@good.com' },
        { email: '' },
    ];
    assert.deepEqual(getValidEmails(users), ['good@example.com', 'also@good.com']);
});

test('getValidEmails returns empty array for non-array input', () => {
    assert.deepEqual(getValidEmails(null), []);
});
