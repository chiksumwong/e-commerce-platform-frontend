const FileDownloader = {
  download: (blob_url, file_name) => {
    let fileLink = document.createElement("a");
    fileLink.href = blob_url;
    fileLink.setAttribute("download", file_name);
    document.body.appendChild(fileLink);
    fileLink.click();
  }
};

export default FileDownloader;
