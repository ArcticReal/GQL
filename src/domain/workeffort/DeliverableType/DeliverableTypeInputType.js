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

const DeliverableTypeInputType = new GraphQLInputObjectType({
  name: 'DeliverableTypeInputType',
  description: 'input type for DeliverableType',

  fields: () => ({
    deliverableTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {DeliverableTypeInputType};
    