import {shallowMount, createLocalVue} from "@vue/test-utils";
import Post from '@/views/post/Post';
import axios from 'axios';
import moxios from 'moxios'

describe('Post', () => {
    let wrapper;
    let localVue = createLocalVue();
    localVue.prototype.$http = axios;

    beforeEach(() => {
        wrapper = shallowMount(Post, {localVue});
        moxios.install()
    });

    afterEach(() => {
        moxios.uninstall()
    });

    it('contains post form', () => {
        exists(wrapper, 'form[name=post-form]')
    });

    it('contains post title input', () => {
        exists(wrapper, 'input[name=title]')
    });

    it('contains post body textarea', () => {
        exists(wrapper, 'textarea[name=body]');
    });

    it('form button contains submit in create mode', () => {
        assertElementValue(wrapper, 'form input[type=submit]', 'Submit');
    });

    it('binding values from input to data', async () => {
        const TITLE = 'Post title';
        const BODY = 'Post body';

        bind(wrapper,'input[name=title]', TITLE);
        expect(wrapper.vm.post.title).to.equal(TITLE);

        bind(wrapper, 'textarea[name=body]', BODY);
        expect(wrapper.vm.post.body).to.equal(BODY);

        wrapper.vm.post.title = 'New post title';
        await localVue.nextTick();
        assertElementValue(wrapper, 'input[name=title]', 'New post title');

        wrapper.vm.post.body = 'New post body';
        await localVue.nextTick();
        assertElementValue(wrapper, 'textarea[name=body]', 'New post body');
    });

    it('can add a new post', async () => {
        const POST_TITLE = 'First post title';
        const POST_BODY = 'First post body';

        wrapper.vm.post = {
            title: POST_TITLE,
            body: POST_BODY,
            userId: 1,
        };

        await localVue.nextTick();

        moxios.stubRequest('https://jsonplaceholder.typicode.com/posts', {
            status: 200,
            response: {
                title: POST_TITLE,
                body: POST_BODY,
                userId: 1,
                message: 'Post created'
            }
        });

        trigger(wrapper,'form[name=post-form]', 'submit');

        moxios.wait(() => {
            expect(wrapper.find('h2').text()).to.equals('Post created');
        })
    });

    const trigger = (wrapper, selector, event = 'input') => {
        if (wrapper) {
            wrapper.find(selector).trigger(event);
        }
    };

});
