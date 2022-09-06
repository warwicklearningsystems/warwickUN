<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

// This line protects the file from being accessed by a URL directly.
defined('MOODLE_INTERNAL') || die();

/**
 * Set default data before installation
 *
 * @return bool
 */
function xmldb_theme_moove_install() {
    global $DB;

    $key = new stdClass();
    $key->plugin = 'theme_moove';
    $key->name = 'licensekey';
    $key->value = '';

    $status = new stdClass();
    $status->plugin = 'theme_moove';
    $status->name = 'licensestatus';
    $status->value = '';

    $data[] = $key;
    $data[] = $status;

    $DB->insert_records('config_plugins', $data);

    return true;
}
