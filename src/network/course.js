import {request} from "./request";


export function getCourse() {
  return request({
    url: '/course/select',
    params: {
    }
  })
}

export function saveCourse(title,teacher,tecnology,courseText,tvTime) {
  return request({
    url: '/course/save',
    params: {
      title,
      teacher,
      tecnology,
      courseText,
      tvTime
    }
  })
}
export function updateNumsById(id,currentnums) {
  return request({
    url: '/course/updateNumsById',
    params: {
      id,
      currentnums
    }
  })
}

export function delCouresById(id) {
  return request({
    url: '/course/delCouresById',
    params: {
      id
    }
  })
}

export function getCourseById(id) {
  return request({
    url: '/course/getCourseById',
    params: {
      id
    }
  })
}

export function updateCourse(id,title,teacher,tecnology,courseText,tvTime) {
  return request({
    url: '/course/updateCourse',
    params: {
      id,
      title,
      teacher,
      tecnology,
      courseText,
      tvTime
    }
  })
}

export function selectPreIp(id_course) {
  return request({
    url: '/ip/selectPreIp',
    params: {
      id_course
    }
  })
}

export function selectDelIp(id_course) {
  return request({
    url: '/ip/selectDelIp',
    params: {
      id_course
    }
  })
}

