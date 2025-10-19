/**
 * Utility functions for exporting data in various formats
 */

/**
 * Converts data to CSV format and triggers download
 */
export const exportToCSV = (data: Record<string, unknown>[], filename: string = 'export.csv') => {
  if (!data || data.length === 0) {
    console.error('No data to export');
    return;
  }

  // Get all unique keys from all objects
  const allKeys = Array.from(
    new Set(data.flatMap(item => Object.keys(item)))
  );

  // Create CSV header
  const header = allKeys.join(',');
  
  // Create CSV rows
  const rows = data.map(item => 
    allKeys.map(key => {
      const value = item[key];
      // Handle values that might contain commas or quotes
      if (typeof value === 'string' && (value.includes(',') || value.includes('"'))) {
        return `"${value.replace(/"/g, '""')}"`;
      }
      return value ?? '';
    }).join(',')
  );

  const csvContent = [header, ...rows].join('\n');
  
  // Create blob and trigger download
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  URL.revokeObjectURL(url);
};

/**
 * Converts data to JSON format and triggers download
 */
export const exportToJSON = (data: unknown, filename: string = 'export.json') => {
  const jsonString = JSON.stringify(data, null, 2);
  
  const blob = new Blob([jsonString], { type: 'application/json;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  URL.revokeObjectURL(url);
};

/**
 * Captures a chart/visualization element as PNG and triggers download
 */
export const exportToPNG = async (elementId: string, filename: string = 'export.png') => {
  const element = document.getElementById(elementId);
  
  if (!element) {
    console.error(`Element with id "${elementId}" not found`);
    return;
  }

  try {
    // For a real implementation, you would use a library like html2canvas
    // For now, we'll just show a message
    console.log('PNG export would capture element:', elementId);
    alert('Export PNG: Cette fonctionnalité nécessite l\'installation de html2canvas pour capturer les graphiques. Pour l\'instant, utilisez la capture d\'écran de votre navigateur.');
  } catch (error) {
    console.error('Error exporting to PNG:', error);
  }
};

/**
 * Export search results to CSV format
 */
export const exportSearchResultsToCSV = (results: {
  query: string;
  positions: number[];
  totalOccurrences: number;
  searchTime: string;
  datasetSize: string;
}) => {
  const data: Record<string, unknown>[] = results.positions.map((position, index) => ({
    'Occurrence': index + 1,
    'Position': position,
    'Séquence': results.query,
  }));

  // Add summary row
  data.push({
    'Occurrence': '',
    'Position': '',
    'Séquence': `Total: ${results.totalOccurrences} occurrences trouvées`,
  });

  exportToCSV(data, `recherche-pi-${results.query}.csv`);
};

/**
 * Export analysis data to CSV format
 */
export const exportAnalysisToCSV = (
  compressionData: { algo: string; ratio: number; complexity: string }[], 
  distributionData: { digit: number; frequency: number }[]
) => {
  const data: Record<string, unknown>[] = [
    { Type: 'Compression', Algorithme: 'gzip', Valeur: compressionData[0]?.ratio },
    { Type: 'Compression', Algorithme: 'bzip2', Valeur: compressionData[1]?.ratio },
    { Type: 'Compression', Algorithme: 'lzma', Valeur: compressionData[2]?.ratio },
    ...distributionData.map((item) => ({
      Type: 'Distribution',
      Algorithme: `Chiffre ${item.digit}`,
      Valeur: item.frequency,
    })),
  ];

  exportToCSV(data, 'analyse-pi.csv');
};
