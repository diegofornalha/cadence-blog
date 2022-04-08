---
title: Home
layout: PageLayout
sections:
  - colors: colors-f
    elementId: ''
    title: Need Answers?
    items:
      - question: How is this different from what we have today?
        answer: >-
          At the office, working together is often a distraction, on remote, it
          could be motivation, At the office, working together is often a
          distraction, on remote, it could be motivation, At the office, working
          together is often a distraction, on remote, it could be motivation
      - question: How is this different from what we have today?
        answer: >-
          At the office, working together is often a distraction, on remote, it
          could be motivation, At the office, working together is often a
          distraction, on remote, it could be motivation, At the office, working
          together is often a distraction, on remote, it could be motivation
      - question: How is this different from what we have today?
        answer: >-
          At the office, working together is often a distraction, on remote, it
          could be motivation, At the office, working together is often a
          distraction, on remote, it could be motivation, At the office, working
          together is often a distraction, on remote, it could be motivation
      - question: How is this different from what we have today?
        answer: >-
          At the office, working together is often a distraction, on remote, it
          could be motivation. At the office, working together is often a
          distraction, on remote, it could be motivation. At the office, working
          together is often a distraction, on remote, it could be motivation.
      - question: How is this different from what we have today?
        answer: >-
          At the office, working together is often a distraction, on remote, it
          could be motivation. At the office, working together is often a
          distraction, on remote, it could be motivation. At the office, working
          together is often a distraction, on remote, it could be motivation.
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-20
          - pb-36
          - pl-4
          - pr-4
        justifyContent: center
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: left
      subtitle:
        fontWeight: '400'
        fontStyle: normal
        textAlign: center
    type: FaqSection
    actions:
      - altText: ''
        url: /faq
        showIcon: true
        icon: arrowRight
        iconPosition: right
        elementId: ''
        type: Link
        label: See all
  - type: ContactSection
    colors: colors-f
    backgroundSize: inset
    title: Get early access
    text: >
      Sign up your team today to be the first to try out our new product to
      increase your team’s productivity
    form:
      type: FormBlock
      variant: variant-b
      elementId: sign-up-form
      destination: ''
      action: /.netlify/functions/submission_created
      fields:
        - name: email
          label: Email
          hideLabel: true
          placeholder: Your email
          isRequired: true
          width: full
          type: EmailFormControl
      submitLabel: Sign Up
      styles:
        submitLabel:
          textAlign: center
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-24
          - mb-0
          - ml-4
          - mr-4
        padding:
          - pt-24
          - pb-24
          - pr-4
          - pl-4
        alignItems: center
        justifyContent: center
        flexDirection: row
        borderRadius: xx-large
        boxShadow: xx-large
      title:
        textAlign: center
      text:
        textAlign: center
---
