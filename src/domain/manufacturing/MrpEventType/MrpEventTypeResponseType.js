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

const MrpEventTypeResponseType = new GraphQLObjectType({
  name: 'MrpEventTypeResponseType',
  description: 'response type for MrpEventType',

  fields: () => ({
    description: {type: GraphQLString},
    mrpEventTypeId: {type: GraphQLString}
  })
});

export {MrpEventTypeResponseType};
    