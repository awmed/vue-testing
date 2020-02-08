import {shallowMount} from "@vue/test-utils";
import {expect} from 'chai';
import PostLayout from '@/layouts/PostLayout'

describe('PostLayout', () => {
    it('shows links correctly', () => {
        let wrapper = shallowMount(PostLayout, {
            stubs: [
                'router-link',
                'router-view'
            ],
        });
        expect(wrapper.find('.links').exists()).to.be.true;
    });
});
