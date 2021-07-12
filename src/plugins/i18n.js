import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'ru',
  messages: {
    en: {
      welcomeMsg: 'Welcome to You Vue.Js App',
      pluginsTxt: 'Installed CLI Plugins',
      guideTxt: 'For a guide and recipes on how to configure / customize this projects',
      guideDocTxt: 'vue-cli documentation'
    },
    ru: {
      welcomeMsg: 'Приветсвую You Vue.Js App',
      pluginsTxt: 'Установленные CLI Plugins',
      guideTxt: 'Для руководства и примеров как настроить этот проект, {break} посмотрите в проектах',
      guideDocTxt: 'vue-cli документация'
    },
    az: {
      welcomeMsg: 'Siz Vue.Js Tətbiqinə xoş gəlmisiniz',
      pluginsTxt: 'CLI Plugins quraşdırıldı',
      guideTxt: 'Bu layihələri necə konfiqurasiya {break} fərdiləşdirəcəyinə dair təlimat və reseptlər üçün',
      guideDocTxt: 'vue-cli sənədlər'
    }
  }
})