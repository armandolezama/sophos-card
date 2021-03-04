/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";
import mocks from './mocks';
import '../sophos-card';

describe('Suite cases', () => {
    it('First Test', async () => {
        const _element = await fixture('<sophos-card></sophos-card>');
        _element.pictureSRC = mocks.pictureSRC;
        _element.pictureAlt = mocks.pictureAlt;
        _element.title = mocks.title;
        _element.subtitle = mocks.subtitle;
        _element.description = mocks.description;
        assert.strictEqual(_element.pictureSRC, mocks.pictureSRC);
        assert.strictEqual(_element.pictureAlt, mocks.pictureAlt);
        assert.strictEqual(_element.title, mocks.title);
        assert.strictEqual(_element.subtitle, mocks.subtitle);
        assert.strictEqual(_element.description, mocks.description);
    })
})