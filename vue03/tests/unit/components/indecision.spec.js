import { shallowMount} from '@vue/test-utils';
import Indecisison from '@/components/Indecision';

describe('Indecision Component', () => {

    let wrapper;
    let clgSpy;

    global.fetch = jest.fn( () => Promise.resolve({
      json: () => Promise.resolve({
        "answer": "yes",
        "forced": false,
        "image": "https://yesno.wtf/assets/yes/2.gif"
      })
    }))

  beforeEach(() => {
    wrapper = shallowMount(Indecisison);

    clgSpy = jest.spyOn(console, 'log');

    jest.clearAllMocks()
  })
    test('debe de hacer match con snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()

    });

    test('Escribir en el input no debe disparar nada (console.log)', async() => {
      const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer');
      const input = wrapper.find('input');
      await input.setValue('Hola mundo');

      expect(clgSpy).toHaveBeenCalledTimes(1);
      expect(getAnswerSpy).not.toHaveBeenCalled()
    });

    test('escribir el simbolo de "?" debe de disparar el getAnswer', async() => {
      const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer');
      const input = wrapper.find('input');
      await input.setValue('Hola mundo?');

      expect(clgSpy).toHaveBeenCalledTimes(2);
      expect(getAnswerSpy).toHaveBeenCalled()

    });
    test('pruebas en getAnswer', async() => {
      await wrapper.vm.getAnswer();
      
      const img = wrapper.find('img');

      expect(img.exists()).toBeTruthy()
      expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/2.gif');
      expect(wrapper.vm.answer).toBe('SI');
    });

    test('pruebas en getAnswer - Fallo API', async() => {

      fetch.mockImplementationOnce( ()=> Promise.reject('Api is down'));
      await wrapper.vm.getAnswer();
        
      const img = wrapper.find('img');

      expect(img.exists()).toBeFalsy();
      expect(wrapper.vm.answer).toBe('No se pudo cargar la API')
    })

})



