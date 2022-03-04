
import { shallowMount} from '@vue/test-utils';
import Counter from '@/components/Counter';

describe('Counter Component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Counter)
  })
  // test('debe de hacer match con el snapshot', () => {

  //   const wrapper = shallowMount(Counter);
  //   expect(wrapper.html()).toMatchSnapshot()

  // })
  test('h2 debe tener el valor por defecto Counter', () => {


    expect(wrapper.find('h2').exists() ).toBeTruthy()

    const h2Value =wrapper.find('h2').text();
    expect(h2Value).toBe('Counter')

  })

  test('El valor por defecto debe ser 100 en el p', async() => {

    // /Wrapper
    //pTags
    // const pTags = wrapper.findAll('p');
    const value = wrapper.find('[data-testid="counter"]').text();
    
    // expecto segundo p === 100
    // expect(pTags[1].text()).toBe('100');
    
    expect(value).toBe('100');
  })


  test('debe de incrementar y decrementar el valor del contador', async() => {


    const [increaseBtn, decreaseBtn] = wrapper.findAll('button');
    
    await increaseBtn.trigger('click');
    await increaseBtn.trigger('click');
    await increaseBtn.trigger('click');
    
    
    // const decreaseBtn = wrapper.findAll('button')[1];
    await decreaseBtn.trigger('click')
    await decreaseBtn.trigger('click')

    const value = wrapper.find('[data-testid="counter"]').text();

    expect(value).toBe('101')


  })
});

