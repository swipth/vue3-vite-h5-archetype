/**
 * @Author: swipth
 * @Description: vant插件集
 */
import {Button} from "vant";
import {Image as VanImage} from "vant";
import {Notify} from "vant";
import {Search} from "vant";
import {List} from "vant";
import {Cell, CellGroup} from "vant";
import {Dialog} from "vant";
import {NavBar} from "vant";
import {Field} from "vant";
import {Overlay} from "vant";
import {Loading} from "vant";
import {Picker} from "vant";
import {Popup} from "vant";
import {TimePicker} from "vant";
import {RadioGroup, Radio} from "vant";
import {Cascader} from "vant";
import {Form} from "vant";
import {Collapse, CollapseItem} from "vant";
import {Uploader} from "vant";
import {Calendar} from "vant";
import {NumberKeyboard} from "vant";
import {ActionSheet} from "vant";
import {Icon} from "vant";
import {Tag} from "vant";
import {Divider} from "vant";
import {Skeleton} from "vant";
import {PullRefresh} from "vant";
import {NoticeBar} from "vant";
import {Checkbox, CheckboxGroup} from "vant";
import {Empty} from "vant";
import {Card} from "vant";
import {Stepper} from "vant";

const plugins = [Stepper, Card, Empty, Checkbox, CheckboxGroup, NoticeBar, PullRefresh, Skeleton, Divider, Tag, Icon, ActionSheet, Button, VanImage, Notify, Search, List, Cell, CellGroup, Dialog, NavBar, Field, Overlay, Loading, Picker, Popup, TimePicker, RadioGroup, Radio, Cascader, Form, Collapse, CollapseItem, Uploader, Calendar, NumberKeyboard];
/**
 * 批量注册插件
 * @param {import("vue").App} app
 */
export const usePlugins = (app:any) => {
  plugins.forEach(app.use, app);
  // plugins.forEach(plugin=>app.use(plugin),app)
};

