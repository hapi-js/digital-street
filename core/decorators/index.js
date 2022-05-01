import ControllerDecorators from './ControllerDecorators';
import PluginDecorators from './PluginDecorators';
import ModelDecorators from './ModelDecorators';


export const Controller = ControllerDecorators.Controller
export const GET = ControllerDecorators.GET
export const PUT = ControllerDecorators.PUT
export const POST = ControllerDecorators.POST
export const DELETE = ControllerDecorators.DELETE
export const Model = ModelDecorators.Model
export const Pre = ModelDecorators.Pre
export const Plugin = PluginDecorators.Plugin