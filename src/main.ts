import './style.css'
import moment from 'moment'

const app = document.querySelector<HTMLDivElement>('#app')!

const history: string[] = []

document.addEventListener('visibilitychange', () => {
  const formatedTimeStr = moment().format('YYYY-MM-DD hh:mm:ss')

  // if (document.hidden) {
  //   history.push(`${formatedTimeStr}：页面被隐藏`)
  // } else {
  //   history.push(`${formatedTimeStr}：页面显示`)
  // }

  switch (document.visibilityState) {
    case 'visible':
      history.push(`${formatedTimeStr}：页面部分可见，有其他前景窗口遮挡页面`)
      break

    case 'hidden':
      history.push(
        `${formatedTimeStr}：页面不可见，可能是：页面处于背景标签页、窗口最小化或操作系统锁屏`,
      )
      break

    // 浏览器不一定会实现
    // case 'prerender':
    //   history.push(`${formatedTimeStr}：页面处于渲染阶段，所以不可见`)
    //   break
  }

  app.innerHTML = `
		<ol>
			${history.map(item => `<li>${item}</li>`).join('\n')}
		</ol>
	`
})
