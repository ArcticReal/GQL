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

const MrpEventTypeInputType = new GraphQLInputObjectType({
  name: 'MrpEventTypeInputType',
  description: 'input type for MrpEventType',

  fields: () => ({
    description: {type: GraphQLString},
    mrpEventTypeId: {type: GraphQLString}
  })
});

export {MrpEventTypeInputType};
    