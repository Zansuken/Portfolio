import '../sass/project.scss'

export let projectUrl = "";
export function ProjectView() {


    if (projectUrl.length === 0) {
        return
    } else {
        return <iframe src={projectUrl} frameBorder="0" className="projectView" title='test'></iframe>

    }

}