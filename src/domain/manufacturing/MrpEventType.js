
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {MrpEventType} from '../manufacturing/MrpEvent.js';


const MrpEventTypeType = new GraphQLObjectType({
  name: 'MrpEventTypeType',
  description: 'Type for MrpEventType in manufacturing',

  fields: () => ({
    mrpEventTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    mrpEvents: {
      type: new GraphQLList(MrpEventType),
      args : {},
      resolve: (mrpEventType, args, {loaders}) => loaders.ofbizArray.load(`manufacturing/mrpEvents/find?mrpEventTypeId=${mrpEventType.mrpEventTypeId}`)
    }
  })
});

export {MrpEventTypeType};
    




const MrpEventTypeInputType = new GraphQLInputObjectType({
  name: 'MrpEventTypeInputType',
  description: 'input type for MrpEventType',

  fields: () => ({
    description: {type: GraphQLString},
    mrpEventTypeId: {type: GraphQLString}
  })
});

export {MrpEventTypeInputType};
    