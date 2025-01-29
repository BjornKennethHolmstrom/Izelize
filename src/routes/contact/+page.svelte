<!-- src/routes/contact/+page.svelte -->
<script lang="ts">
  import { language } from '$lib/stores';
  import { Github, Mail } from 'lucide-svelte';
  import SEO from '$lib/components/SEO.svelte';

  const content = {
    title: {
      en: 'Get in Touch',
      sv: 'Kontakta Oss'
    },
    subtitle: {
      en: 'Have questions or suggestions? We\'d love to hear from you.',
      sv: 'Har du frågor eller förslag? Vi skulle gärna höra från dig.'
    },
    form: {
      name: {
        label: { en: 'Name', sv: 'Namn' },
        placeholder: { 
          en: 'Enter your name', 
          sv: 'Ange ditt namn' 
        }
      },
      email: {
        label: { en: 'Email', sv: 'E-post' },
        placeholder: { 
          en: 'Enter your email', 
          sv: 'Ange din e-post' 
        }
      },
      message: {
        label: { en: 'Message', sv: 'Meddelande' },
        placeholder: { 
          en: 'Your message...', 
          sv: 'Ditt meddelande...' 
        }
      },
      submit: {
        en: 'Send Message',
        sv: 'Skicka Meddelande'
      }
    },
    connect: {
      title: {
        en: 'Connect',
        sv: 'Anslut'
      },
      github: {
        en: 'Follow on GitHub',
        sv: 'Följ på GitHub'
      },
      email: {
        en: 'Send an email',
        sv: 'Skicka ett mail'
      }
    }
  };
</script>

<SEO 
  title={$language === 'en' ? 'Contact - Izelize' : 'Kontakt - Izelize'}
  description={$language === 'en'
    ? 'Get in touch with us to learn more about our projects or contribute to our ecosystem.'
    : 'Kontakta oss för att lära dig mer om våra projekt eller bidra till vårt ekosystem.'}
  path="/contact"
/>

<div class="max-w-6xl mx-auto px-4 py-16">
  <div class="text-center mb-12">
    <h1 class="text-4xl md:text-5xl font-bold mb-4">
      {content.title[$language]}
    </h1>
    <p class="text-xl text-gray-300">
      {content.subtitle[$language]}
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
    <!-- Contact Form -->
    <div class="bg-background/30 p-8 rounded-lg backdrop-blur-sm">
      <form
        action="https://formspree.io/f/xovjdoka"
        method="POST"
        class="space-y-6"
      >
        <div>
          <label for="name" class="block text-sm font-medium mb-2">
            {content.form.name.label[$language]}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            class="w-full px-4 py-2 rounded-lg bg-background/50 border border-gray-700 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors"
            placeholder={content.form.name.placeholder[$language]}
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium mb-2">
            {content.form.email.label[$language]}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            class="w-full px-4 py-2 rounded-lg bg-background/50 border border-gray-700 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors"
            placeholder={content.form.email.placeholder[$language]}
          />
        </div>

        <div>
          <label for="message" class="block text-sm font-medium mb-2">
            {content.form.message.label[$language]}
          </label>
          <textarea
            name="message"
            id="message"
            required
            rows="4"
            class="w-full px-4 py-2 rounded-lg bg-background/50 border border-gray-700 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors"
            placeholder={content.form.message.placeholder[$language]}
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full bg-secondary text-background font-semibold px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors"
        >
          {content.form.submit[$language]}
        </button>
      </form>
    </div>

    <!-- Connect Section -->
    <div class="flex flex-col justify-center space-y-8">
      <h2 class="text-2xl font-bold text-secondary">
        {content.connect.title[$language]}
      </h2>
      
      <a
        href="https://github.com/BjornKennethHolmstrom"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center space-x-4 text-lg hover:text-secondary transition-colors"
      >
        <Github class="w-6 h-6" />
        <span>{content.connect.github[$language]}</span>
      </a>

      <a
        href="mailto:bjorn.kenneth.holmstrom@gmail.com"
        class="flex items-center space-x-4 text-lg hover:text-secondary transition-colors"
      >
        <Mail class="w-6 h-6" />
        <span>{content.connect.email[$language]}</span>
      </a>
    </div>
  </div>
</div>
