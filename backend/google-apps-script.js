/**
 * GOOGLE APPS SCRIPT — shu kodni Google Apps Script editorga nusxalang.
 *
 * Sozlash:
 * 1. Google Sheets oching (yoki yangi yarating)
 * 2. Extensions → Apps Script
 * 3. Shu kodni joylashtiring
 * 4. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. URL ni backend .env dagi GOOGLE_SCRIPT_URL ga qo'ying
 *
 * Sheets birinchi qatori sarlavha bo'lishi kerak:
 * | name | phone | date |
 */

// POST — yangi ro'yxatdan o'tganlarni yozadi
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.name || '',
      data.phone || '',
      data.date || new Date().toISOString()
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// GET — barcha qatorlarni JSON qaytaradi (sync uchun)
function doGet() {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = sheet.getDataRange().getValues();

    if (data.length <= 1) {
      return ContentService
        .createTextOutput(JSON.stringify([]))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var headers = data[0];
    var rows = [];

    for (var i = 1; i < data.length; i++) {
      var obj = {};
      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = data[i][j];
      }
      rows.push(obj);
    }

    return ContentService
      .createTextOutput(JSON.stringify(rows))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
