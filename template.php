<?php

/**
 * @file
 * Contains the theme's functions to manipulate Drupal's default markup.
 */


/**
 * Implements hook_preprocess_html().
 */
function infusion_preprocess_html(&$variables, $hook) {
  //add the infusion class to body if it hasn't been added yet
  if (in_array('infusion-uiomodule-theme', $variables['classes_array'])) {
    return;
  }
  else {
    $variables['classes_array'][] = 'infusion-uiomodule-theme';
  }
}

/**
 * Implements hook_preprocess_page().
 */
  function infusion_preprocess_page(&$variables, $hook) {
  //pass the theme path to Drupal.settings
  drupal_add_js('jQuery.extend(Drupal.settings, { "pathToTheme": "' . path_to_theme() . '" });', 'inline');  }

/**
 * Implements hook_preprocess_block().
 */
function infusion_preprocess_block(&$variables, $hook) {
  if ($variables['block_html_id'] == 'block-search-form') {
    $variables['classes_array'][] = 'clearfix';
  }
}

/**
 * Implements hook_form_alter().
 */
function infusion_form_alter(&$form, &$form_state, $form_id) {
  //put some placeholder text in various text fields
  switch ($form_id) {
    case 'search_block_form':
      $form['search_block_form']['#attributes'] = array('placeholder' => t('Search'));
      break;
    
    case 'user_login_block':
      $form['name']['#title_display'] = 'invisible';
      $form['name']['#attributes'] = array('placeholder' => t('Username'));
      $form['pass']['#title_display'] = 'invisible';
      $form['pass']['#attributes'] = array('placeholder' => t('Password'));      
      break;

    default:
      break;
  }
}
