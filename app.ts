function updatePreview() {
  const firstname = (document.getElementById("firstname") as HTMLInputElement)
    .value;
  const middlename = (document.getElementById("middlename") as HTMLInputElement)
    .value;
  const lastname = (document.getElementById("lastname") as HTMLInputElement)
    .value;
  const designation = (
    document.getElementById("designation") as HTMLInputElement
  ).value;
  const address = (document.getElementById("address") as HTMLInputElement)
    .value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phoneno = (document.getElementById("phoneno") as HTMLInputElement)
    .value;
  const summary = (document.getElementById("summary") as HTMLInputElement)
    .value;

  const ach_title = (document.getElementById("ach_title") as HTMLInputElement)
    .value;
  const ach_description = (
    document.getElementById("ach_description") as HTMLInputElement
  ).value;

  const ex_title = (document.getElementById("ex_title") as HTMLInputElement)
    .value;
  const ex_company = (document.getElementById("ex_company") as HTMLInputElement)
    .value;
  const ex_location = (
    document.getElementById("ex_location") as HTMLInputElement
  ).value;
  const ex_start_date = (
    document.getElementById("ex_start_date") as HTMLInputElement
  ).value;
  const ex_end_date = (
    document.getElementById("ex_end_date") as HTMLInputElement
  ).value;
  const ex_description = (
    document.getElementById("ex_description") as HTMLInputElement
  ).value;

  const school = (document.getElementById("school") as HTMLInputElement).value;
  const degree = (document.getElementById("degree") as HTMLInputElement).value;
  const city = (document.getElementById("city") as HTMLInputElement).value;
  const start_date = (document.getElementById("start_date") as HTMLInputElement)
    .value;
  const end_date = (document.getElementById("end_date") as HTMLInputElement)
    .value;
  const description = (
    document.getElementById("description") as HTMLInputElement
  ).value;

  const project = (document.getElementById("project") as HTMLInputElement)
    .value;
  const pro_link = (document.getElementById("pro_link") as HTMLInputElement)
    .value;
  const pro_description = (
    document.getElementById("pro_description") as HTMLInputElement
  ).value;

  const skills = (
    document.getElementById("skills") as HTMLInputElement
  ).value.split(",");

  (
    document.getElementById("fullname_dsp") as HTMLParagraphElement
  ).textContent = `Full Name: ${firstname} ${middlename} ${lastname}`;
  (
    document.getElementById("designation_dsp") as HTMLParagraphElement
  ).textContent = `Designation: ${designation}`;
  (
    document.getElementById("phoneno_dsp") as HTMLParagraphElement
  ).textContent = `Phone No: ${phoneno}`;
  (
    document.getElementById("email_dsp") as HTMLParagraphElement
  ).textContent = `Email Address: ${email}`;
  (
    document.getElementById("address_dsp") as HTMLParagraphElement
  ).textContent = `Address: ${address}`;
  (
    document.getElementById("summary_dsp") as HTMLParagraphElement
  ).textContent = `Summary: ${summary}`;

  document.getElementById(
    "achievements_dsp"
  )!.innerHTML = `Achievement Title / Description: ${ach_title}: ${ach_description}`;
  document.getElementById(
    "experiences_dsp"
  )!.innerHTML = `Experience: ${ex_title} at ${ex_company}, ${ex_location} (${ex_start_date} - ${ex_end_date}): ${ex_description}`;
  document.getElementById(
    "educations_dsp"
  )!.innerHTML = `Degree Info: ${degree} from ${school}, ${city} (${start_date} - ${end_date}): ${description}`;
  document.getElementById(
    "projects_dsp"
  )!.innerHTML = `Project Details: ${project} (<a href="${pro_link}" target="_blank">Link</a>): ${pro_description}`;

  const skillsContainer = document.getElementById("skills_dsp") as HTMLElement;
  skillsContainer.innerHTML = "";
  skills.forEach((skill) => {
    const skillElement = document.createElement("p");
    skillElement.textContent = skill.trim();
    skillsContainer.appendChild(skillElement);
  });
}

const inputs = [
  "firstname",
  "middlename",
  "lastname",
  "designation",
  "address",
  "email",
  "phoneno",
  "summary",
  "ach_title",
  "ach_description",
  "ex_title",
  "ex_company",
  "ex_location",
  "ex_start_date",
  "ex_end_date",
  "ex_description",
  "school",
  "degree",
  "city",
  "start_date",
  "end_date",
  "description",
  "project",
  "pro_link",
  "pro_description",
  "skills",
];

inputs.forEach((id) => {
  const inputField = document.getElementById(id);
  if (inputField) {
    inputField.addEventListener("input", updatePreview);
  }
});

const fileInput = document.getElementById("yourimage") as HTMLInputElement;
const displayImage = document.getElementById("image_dsp") as HTMLImageElement;

fileInput.addEventListener("change", () => {
  const file = fileInput.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      displayImage.src = event.target?.result as string;
      displayImage.style.display = "block";
    };
    reader.readAsDataURL(file);
  } else {
    displayImage.style.display = "none";
  }
});

document.getElementById("about-sc")!.addEventListener("submit", (e) => {
  e.preventDefault();

  updatePreview();

  document.getElementById("preview-sc")!.style.display = "block";

  document.getElementById("edit-button")!.style.display = "block";
});

document.getElementById("edit-button")!.addEventListener("click", () => {
  document.getElementById("about-sc")!.style.display = "block";
});